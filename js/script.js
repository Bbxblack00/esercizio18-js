function initVue() {
  new Vue({

    el: '#app',
    data: {

      'title': 'hello world!',
      'pathImg': 'img/Ciao.png',
      'img': false,
      'names': [
        ['Guybrush'],
        'Giorgio',
        'Francesca'
      ],
      'index': 0,
      'factor': 1.7,
      'img': [
        'img/img1.jpg',
        'img/img2.jpg',
        'img/img3.jpg'
      ]

    },
    methods: {
      flipImg: funcrion() {
        this.img = !this.img;
      }
    }
  });
}

function init() {

  initVue();

}

$(init);

let x = true;

let z = x ? 1 : -1;
