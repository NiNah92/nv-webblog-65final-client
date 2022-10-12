<template>
    <div>
      <h1>Edit course</h1>
      
      <form v-on:submit.prevent="editCourse">
        <p>title: <input type="text" v-model="course.title" /></p>
      <p>instructor: <input type="text" v-model="course.instructor" /></p>
      <p>description: <input type="text" v-model="course.description" /></p>
      <p>total_student: <input type="text" v-model="course.total_student" /></p>
      <p>type: <input type="text" v-model="course.type" /></p>
        <p><button type="submit">edit course</button></p>
      </form>
      <hr />
      <div>
        <p>title: {{ course.title }}</p>
      <p>instructor: {{ course.instructor }}</p>
      <p>description: {{ course.description }}</p>
      <p>total_student: {{ course.total_student }}</p>
      <p>type: {{ course.type }}</p>
       
      </div>
    </div>
  </template>
  <script>
  import CoursesService from "@/services/CourseService";
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
      async editCourse() {
        try {
          await CoursesService.put(this.course);
          this.$router.push({
            name: "courses"
          });
        } catch (err) {
          console.log(err);
        }
      }
    },
    async created() {
      try {
        let courseId = this.$route.params.courseId;
        this.course = (await CoursesService.show(courseId)).data;
      } catch (error) {
        console.log(error);
      }
    }
  };
  </script>
  <style scoped></style>
  