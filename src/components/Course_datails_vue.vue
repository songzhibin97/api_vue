<template>
  <div class="Course_details_vue">
    <!--插入面板-->
    <div class="panel panel-default">
      <div class="panel-heading"><h3>课程详情表</h3></div>
      <div class="panel-body">
        <!--引入bootstrap table样式-->
        <table class="table table-hover">
          <thead>
          <tr>
            <th>课程名称</th>
            <th>难易程度</th>
            <th>口号</th>
            <th>选择理由</th>
            <th>推荐课程</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item) in new_course_datails_data">
            <td>{{item.name}}</td>
            <td>{{item.lever}}</td>
            <td>{{item.slogon}}</td>
            <td>{{item.why}}</td>
            <td v-for="recommend in item.recommend_courses">
              <span>
                <a style="margin: 0;padding: 0" @click="Jump_link(recommend[0])">{{recommend[1]}}</a>
              </span>
            </td>

          </tr>
          </tbody>


        </table>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Course_details_vue",
    data() {
      return {
        course_datails_data: [],

      }
    },
    methods: {
      // 推荐页面跳转
      Jump_link(recommend_id) {
        this.$store.dispatch('send_course_datails_ajax', this); // 重新加载页面
        this.$router.push({name: "Course_datails", params: {id: recommend_id}})
      }
    }
    ,
    computed: {
      new_course_datails_data() {
        return this.course_datails_data = this.$store.getters.get_course_datails.data
      }
    },
    mounted() {
      this.$store.dispatch('send_course_datails_ajax', this)
    }
  }
</script>
<style scoped>
</style>
