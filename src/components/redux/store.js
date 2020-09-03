import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

let store = {

    _renderEntireTree() {
        console.log('state is changed')
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'privet', like: 15},
                {id: 2, message: 'poka', like: 20},
                {id: 3, message: 'hi', like: 30},
                {id: 4, message: 'bye', like: 40},
            ],
            textForAdd: ''
        },

        dialogsPage: {
            users: [
                {
                    name: 'Dima',
                    id: 1,
                    avatar: 'https://sun9-50.userapi.com/impf/c855236/v855236347/85c45/ezsYcnSzh-4.jpg?size=50x0&quality=90&crop=0,0,770,770&sign=fb8e89bd357bf3c9d6496533702af226&ava=1'
                },
                {
                    name: 'Misha',
                    id: 2,
                    avatar: 'https://sun9-8.userapi.com/impg/c857632/v857632865/1c4ce1/Xy73XzUSWQU.jpg?size=50x0&quality=90&crop=0,0,703,703&sign=9506d12e2ac47cbf066ecc9ebf2e626b&ava=1'
                },
                {
                    name: 'Nastya',
                    id: 3,
                    avatar: 'https://sun1-95.userapi.com/impg/PBfr9FLliwouF_8KTqS03wjVz-P962iKULwCag/XivTgT34isY.jpg?size=50x0&quality=90&crop=0,0,1620,1620&sign=f8b8441fd7e96788349637083902ff25&ava=1'
                },
                {name: 'Kirill', id: 4, avatar: 'https://sun9-8.userapi.com/c5134/u135194303/e_d748db58.jpg?ava=1'},
                {
                    name: 'Sasha',
                    id: 5,
                    avatar: 'https://sun9-58.userapi.com/impf/c830509/v830509184/1b8b05/Tuz0GQoGEvI.jpg?size=50x0&quality=90&crop=0,0,2047,2047&sign=1a1f3c54f58420553a71e4e195397ef6&ava=1'
                }
            ],
            messages: [
                {message: 'privet', id: 1},
                {message: 'poka', id: 2},
            ],
            textForAdd: ''
        }
    },

    subscribe(observer) {
        this._renderEntireTree = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action)
        dialogReducer(this._state.dialogsPage, action)
        this._renderEntireTree(this._state)
    }
}

export default store;