import {
    createElement,
} from '../script/layout'

const NAV_BUTTONS = [
    {
        text: 'База знань', 
        isActive: false,
    },
    {   
        text: 'Інформація',
        isActive: true,
    },
]

const COMMUNITY_INFO = {
    imgSrc: '/img/community.png',
    title: 'Що таке база знань?',
    info_text: 'База знань - база даних, що містить правила виведення та інформацію про людський досвід і знання в деякій предметній галузі. У системах, що самонавчаються, база знань також містить інформацію, що є результатом вирішення попередніх завдань.',
    button_text: "Перейти до ком'юніті у Телеграм",
}

export const createCommunity = ()=>{
    const comSection = createElement('section','community')

    const navBar = createElement('div', 'community__navBar')
    NAV_BUTTONS.forEach((buttonData)=>{
        const button = createElement(
            'button',
            buttonData.isActive
                ? 'button nav__button active'
                : 'button nav__button',
            buttonData.text,
        )
        navBar.append(button)
    })
    
    comSection.append(navBar)
   
    const comContent = createElement('div', 'community__content')
    const comImg = createElement('img')
    comImg['src'] = COMMUNITY_INFO.imgSrc
    const comTitle = createElement('h2', 'community__title', COMMUNITY_INFO.title)
    const comInfo = createElement('p', 'community__info', COMMUNITY_INFO.info_text)
    const comButton = createElement('button', 'button community__button', COMMUNITY_INFO.button_text)
    
    comContent.append(comImg, comTitle, comInfo, comButton)
    comSection.append(comContent)
    
    return comSection
}






























/*

const HEADER_BUTTON_LIST = [
    {
        width: 24,
        height: 24,
        src: '/svg/arrow-back.svg'
    },
    {
        width: 24,
        height: 24,
        src: '/img/avatar.png'
    }
]

export const createHeader = ()=>{
    const header = createElement('header','header')

    HEADER_BUTTON_LIST.forEach((params)=>{
        const button = createElement('button','button')
        const img = createElement('img')
        Object.entries(params).forEach(([key,value])=>{
            img[key] = value
        })
        button.append(img)
        header.append(button)
    })
return header
}

const POSTS = [
    {
        category: [
            {text: 'Важливо', type: 'cat_impotant'},
            {text: 'Нова', type: 'cat_new'},
        ],
        date: '25.01',
        post_text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ad iusto sunt, nam necessitatibus labore voluptatum iure voluptates ex, omnis fuga quos dicta dolore vitae itaque nihil, voluptas explicabo. Possimus!',
        viewed: false,
    },
    {
        category: [
            {text: 'Важливо', type: 'cat_impotant'},
            {text: 'Нова', type: 'cat_new'},
        ],
        date: '25.01',
        post_text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ad iusto sunt, nam necessitatibus labore voluptatum iure voluptates ex, omnis fuga quos dicta dolore vitae itaque nihil, voluptas explicabo. Possimus!',
        viewed: true,
    },
    {
        category: [
            {text: 'Важливо', type: 'cat_impotant'},
            {text: 'Нова', type: 'cat_new'},
        ],
        date: '25.01',
        post_text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ad iusto sunt, nam necessitatibus labore voluptatum iure voluptates ex, omnis fuga quos dicta dolore vitae itaque nihil, voluptas explicabo. Possimus!',
        viewed: false,
    },
]

export const createPosts = ()=>{
    const postSection = createElement('section','posts')

    POSTS.forEach((postData)=>{
        const post = createElement(
            'div',
            postData.viewed
                ? 'post button post--viewed'
                : 'post button',
        )

        const postHeader = createElement('div', 'post__header')
        const postCategorys = createElement('div', 'categorys')
        const dateSpan = ('span','date',postData.date)

        postData.category.forEach((category)=>{
            const catSpan = createElement(
                'span',
                `category ${category.type}`,
                category.text
            )
            postCategorys.append(catSpan)
        })

        postHeader.append(postCategorys, dateSpan)
        const postBody = createElement('div', 'post__body', postData.post_text)

        post.append(postHeader,postBody)
        postSection.append(post)
        
    })
    return postSection
}
*/
