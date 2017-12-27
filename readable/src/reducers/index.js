import { ADD_POST, REMOVE_POST } from '../actions/index';



// how the state can look after some post =

// state = {
//     react:[
//         {
//             id: '8xf0y6ziyjabvozdd253nd',
//             timestamp: 1467166872634,
//             title: 'Udacity is the best place to learn React',
//             body: 'Everyone says so after all.',
//             author: 'thingtwo',
//             category: 'react',
//             voteScore: 6,
//             deleted: false,
//             commentCount: 2,
//             comments:[
//                 {
//                     id: '894tuq4ut84ut8v4t8wun89g',
//                     parentId: "8xf0y6ziyjabvozdd253nd",
//                     timestamp: 1468166872634,
//                     body: 'Hi there! I am a COMMENT.',
//                     author: 'thingtwo',
//                     voteScore: 6,
//                     deleted: false,
//                     parentDeleted: false
//                 },
//                 {
//                     id: '8tu4bsun805n8un48ve89',
//                     parentId: "8xf0y6ziyjabvozdd253nd",
//                     timestamp: 1469479767190,
//                     body: 'Comments. Are. Cool.',
//                     author: 'thingone',
//                     voteScore: -5,
//                     deleted: false,
//                     parentDeleted: false}
//             ]
//         }
//     ],
//     redux:[],
//     udacity:[]
// }






function posts(state = initalAppState, action) {
    // we grab some properties out of our action
    const { category, posts } = action;
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                [category]: {
                    ...state[category],
                    [posts]: post.boy
                }
            }

        case REMOVE_POST:
            return {
                ...state,
                [category]
            }

        default:
            return state;
    }
}


export default posts;
