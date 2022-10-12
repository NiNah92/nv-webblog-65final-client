<template>
    <div>
        <h1>Create courses</h1>
    <form v-on:submit.prevent="createCourse">
      <p>title: <input type="text" v-model="course.title" /></p>
      <p>instructor: <input type="text" v-model="course.instructor" /></p>
      <p>description: <input type="text" v-model="course.description" /></p>
      <p>total_student: <input type="text" v-model="course.total_student" /></p>
      <p>type: <input type="text" v-model="course.type" /></p>
      <p>status: <input type="text" v-model="course.status" /></p>

      <p><button type="submit">create course</button></p>
    </form>
    <hr />
    <div>
      <p>title: {{ course.title }}</p>
      <p>instructor: {{ course.instructor }}</p>
      <p>description: {{ course.description }}</p>
      <p>total_student: {{ course.total_student }}</p>
      <p>type: {{ course.type }}</p>
      <p>status: {{ course.status }}</p>
    </div>
  </div>
  </template>
  <script>
  import CourseService from "@/services/CourseService";
  
  export default {
    data() {
      return {
        couse: {
            title: "",
            instructor: "",
          description: "",
          total_student: "",
          type: "",
          status: ""
        }
      };
    },
    methods: {
      async createcourse() {
        try {
          await CoursesService.post(this.course);
          this.$router.push({
            name: "couses"
          });
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  </script>
  <style scoped></style>
  