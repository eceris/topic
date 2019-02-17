<template>
  <div id="topic">
    <img v-for="item in items" :key="item.id" v-bind:src="item.thumbnail" style="width: 100px;margin:5px;"/>
  </div>
</template>

<script>
export default {
  name: 'topic',
  data: function () {
    return {
      items: [
        {
          id: 1,
          name: 'adfasd.png',
          createdAt: 'adsf',
          type: 'photo',
          size: 10,
          thumbnail: 'https://picsum.photos/600/300/?image=25'
        },
        {
          id: 2,
          name: 'ddd.mp4',
          createdAt: '20190130',
          type: 'video',
          size: 10,
          thumbnail: 'https://picsum.photos/600/300/?image=25'
        },
        {
          id: 3,
          name: 'ddd.mp4',
          createdAt: '20190130',
          type: 'video',
          size: 10,
          thumbnail: 'https://picsum.photos/600/300/?image=25'
        },
        {
          id: 4,
          name: 'ddd.mp4',
          createdAt: '20190130',
          type: 'video',
          size: 10,
          thumbnail: 'https://picsum.photos/600/300/?image=25'
        },
        {
          id: 5,
          name: 'ddd.mp4',
          createdAt: '20190130',
          type: 'video',
          size: 10,
          thumbnail: 'https://picsum.photos/600/300/?image=25'
        },
        {
          id: 6,
          name: 'ddd.mp4',
          createdAt: '20190130',
          type: 'video',
          size: 10,
          thumbnail: 'https://picsum.photos/600/300/?image=25'
        },
        {
          id: 7,
          name: 'ddd.mp4',
          createdAt: '20190130',
          type: 'video',
          size: 10,
          thumbnail: 'https://picsum.photos/600/300/?image=25'
        },

        {
          id: 8,
          name: 'ddd.mp4',
          createdAt: '20190130',
          type: 'video',
          size: 10,
          thumbnail: 'https://picsum.photos/600/300/?image=25'
        },
        {
          id: 9,
          name: 'ddd.mp4',
          createdAt: '20190130',
          type: 'video',
          size: 10,
          thumbnail: 'https://picsum.photos/600/300/?image=25'
        },
        {
          id: 10,
          name: 'ddd.mp4',
          createdAt: '20190130',
          type: 'video',
          size: 10,
          thumbnail: 'https://picsum.photos/600/300/?image=25'
        },
        {
          id: 11,
          name: 'ddd.mp4',
          createdAt: '20190130',
          type: 'video',
          size: 10,
          thumbnail: 'https://picsum.photos/600/300/?image=25'
        },
        {
          id: 12,
          name: 'ddd.mp4',
          createdAt: '20190130',
          type: 'video',
          size: 10,
          thumbnail: 'https://picsum.photos/600/300/?image=25'
        }
      ]
    }
  },
  methods: {
    get: function () {
      console.log('test')
      // debugger
      // this.$http.get('www.naver.com')
      //     .then( result => {
      //         return result;
      //     });
    }
  }
}
</script>

<style scoped>

</style>
