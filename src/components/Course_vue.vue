<template>
  <div class="Course_vue">
    <!--插入面板-->
    <div class="panel panel-default">
      <div class="panel-heading"><h3>课程列表</h3></div>
      <div class="panel-body">
        <!--插入element-ul table样式-->
        <el-table
          :data="new_course_data"
          border
          style="width: 100%">
          <el-table-column
            fixed
            prop="id"
            label="ID">
          </el-table-column>
          <el-table-column
            fixed
            prop="name"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="course_img"
            label="图片">
          </el-table-column>
          <el-table-column
            prop="lever"
            label="难度">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作">
            <template slot-scope="scope">
              <el-button @click="look_course_datails(scope.row)" type="text" size="small">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Course_vue',
    data() {
      return {
        course_data: [],
        row_id: 1
      }
    },
    props: {
      // course_data: Object,
    },
    computed: {
      new_course_data() {
        return this.course_data = this.$store.getters.get_course.data
      }
    },
    mounted() {
      this.$store.dispatch('send_course_ajax', this);

    },
    methods: {
      look_course_datails(row) {
        this.$router.push({name: 'Course_datails', params: {id: row.id}})
      }

    }

  }
</script>

<style scoped>

</style>
