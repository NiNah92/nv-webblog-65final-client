<template>
    <div>
      <h1>course</h1>
      <div>total_student {{ course.total_student }}</div>
      <div v-for="user in users" v-bind:key="course.id">
        <div>id: {{ course.id }}</div>
        <div>title: {{ course.title }}</div>
        <div>instructor: {{ course.instructor }} </div>
        <div>description: {{ course.description }}</div>
        <div>status: {{ course.status }}</div>
        <div>type: {{ course.type }}</div>
        <p>
          <button v-on:click="navigateTo('/course/' + course.id)">ดูข้อมูล</button>
          <button v-on:click="navigateTo('/course/edit/' + course.id)">  แก้ไขข้อมูล </button>
          <button v-on:click="deleteฉouse(course)">ลบข้อมูล</button>
        </p>
        <hr />
      </div>
    </div>
  </template>
  <script>
  import CourseServices from "@/services/CourseService";
  export default {
    data() {
      return {
        course: []
      };
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      },
      async deleteUser(course) {
        let result = confirm("Want to delete?");
        if (result) {
          try {
            await CourseServices.delete(course);
            this.refreshData()
          } catch (err) {
            console.log(err);
          }
        }
      },
      async refreshData() {
        this.course = (await CourseServices.index()).data;
      }
    },
    async created() {
      this.course = (await CourseServices.index()).data;
    }
  };
  </script>
  <style scoped></style>
  