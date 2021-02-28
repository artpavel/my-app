import {rerenderEntireTree} from "../render";

let state = {

    dialogPage: {
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Есть запись покороче'},
        ],
        dialogsData: [
            {id: 1, name: 'Dimas'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'}
        ],
    },
    profilePage: {
        postsData: [
            {id: 1, post: 'Hi, how are you?'},
            {id: 2, post: "It's my first post"},
            {id: 3, post: "Я пробую это на Реакте"},
            {id: 4, post: "И пока все хорошо понимаю"},
        ],
        newPostText: 'Pavel learn React. Я что-то напечатал'
    },
    sidebar: {
        displaysNav: [
            {id: 1, name: 'Dimas'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'}
        ],
        menusNav: [
            {id: 1, path: '/profile', text: 'Profile'},
            {id: 2, path: '/dialogs', text: 'Messages'},
            {id: 3, path: '/news', text: 'News'},
            {id: 4, path: '/music', text: 'Music'},
            {id: 5, path: '/settings', text: 'Settings'},
        ]
    }
}

// функция добавки сообщения
export let addPost = () => {

    let newPost = {
        id: 5,
        post: state.profilePage.newPostText,
    }
    state.profilePage.postsData.push(newPost)
    rerenderEntireTree(state)
}

export let updateNewPostText = (postMessage) => {

    state.profilePage.newPostText = postMessage
    rerenderEntireTree(state)
}

export default state