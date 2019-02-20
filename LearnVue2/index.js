const submissions = [{
        id: 1,
        title: 'Yellow Pail',
        description: 'On-demand sand castle construction and expertise.',
        url: '#',
        vote: 20,
        avatar: 'img/pf1.jpeg',
        submissionImage: 'img/bg1.jpg',
    },
    {
        id: 2,
        title: 'Yellow Pail',
        description: 'On-demand sand castle construction and expertise.',
        url: '#',
        vote: 4,
        avatar: 'img/pf1.jpeg',
        submissionImage: 'img/bg1.jpg',
    },
    {
        id: 3,
        title: 'Yellow Pail',
        description: 'On-demand sand castle construction and expertise.',
        url: '#',
        vote: 10,
        avatar: 'img/pf1.jpeg',
        submissionImage: 'img/bg1.jpg',
    },
    {
        id: 4,
        title: 'Yellow Pail',
        description: 'On-demand sand castle construction and expertise.',
        url: '#',
        vote: 1,
        avatar: 'img/pf1.jpeg',
        submissionImage: 'img/bg1.jpg',
    }
];




let app = new Vue({
    el: '#app',
    data: {
        submissions: submissions.sort((x, y) => {
            x.vote - y.vote;
        }),
    }
});