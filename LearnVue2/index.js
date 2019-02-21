const submissions = [{
        id: 1,
        title: 'Yellow Pail',
        description: 'On-demand sand castle construction and expertise.',
        url: '#',
        vote: 16,
        avatar: 'img/pf1.jpeg',
        submissionImage: 'img/bg1.jpg',
    },
    {
        id: 2,
        title: 'Tinfolid: Tailored tinfoil hats ',
        description: 'We have your messurements and shipping address. ',
        url: '#',
        vote: 10,
        avatar: 'img/pf2.jpeg',
        submissionImage: 'img/bg2.jpg',
    },
    {
        id: 3,
        title: 'Supermajority: The Fantasy Congress League',
        description: ' Earn Points when your favourite politicians pass legislatoin. ',
        url: '#',
        vote: 11,
        avatar: 'img/pf3.jpeg',
        submissionImage: 'img/bg3.jpeg',
    },
    {
        id: 4,
        title: 'Haught or Naught',
        description: 'Hight-minded or absent-minded? You decide ',
        url: '#',
        vote: 2,
        avatar: 'img/pf4.jpeg',
        submissionImage: 'img/bg4.jpg',
    }
];

const submissionComponent = {
    template: `
<div>
    <figure class="media-left">
    <img v-bind:src="submission.submissionImage" alt="" class="image is-64x64">
    </figure>
    <div class="media-content">
        <div class="content">
            <p>
                <strong>
                    <a :href="submission.url" class="has-text-info">{{ submission.title}}</a>
                    <span class="tag is-small">#{{submission.id}}</span>
                </strong>
                <br>
                {{ submission.description}}
                <br>
                <small class='is-size-7'>
                    Submitted by:
                    <img v-bind:src="submission.avatar" alt="" class="image is-24x24">
                </small>
            </p>
        </div>
    </div>

    <div class="media-right">
        <span class="icon is-small" @click='upVote(submission.id)'>
            <i class="fas fa-chevron-up"></i>
            <strong class="has-text-info">{{submission.vote}}</strong>
        </span>
    </div>
</div>
`,
    props: ['submission', 'submissions'],
}


let app = new Vue({
    el: '#app',
    data: {
        submissions: submissions,
    },
    methods: {
        upVote(submissionId) {
            const submission = this.submissions.find(submission => submission.id == submissionId);
            submission.vote++;
        }
    },
    computed: {
        sortSubmissions() {
            return this.submissions.sort((x, y) => {
                return -(x.vote - y.vote);
            });
        }
    },
    components: {
        'submission-component': submissionComponent,
    }


});