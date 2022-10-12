<template>
    <div>
      <h1>Show course</h1>
      <p>id: {{ course.id }}</p>
      <p>title: {{ course.title }} </p>
      <p>instructor: {{ course.instructor }}</p>
      <p>description: {{ course.description }}</p>
      <p>total_student: {{ course.total_student }}</p>
      <p>status: {{ course.status }}</p>
      <p>type: {{ course.type }}</p>
    </div>
  </template>
  <script>
  import CourseService from "@/services/CourseService";
  
  export default {
    data() {
      return {
        course: null
      };
    },
    async created() {
      let courseId = this.$route.params.courseId;
      this.course = (await CourseService.show(courseId)).data
      console.log(this.courseId)
    }
  };
  </script>
  <style scoped></style>
  