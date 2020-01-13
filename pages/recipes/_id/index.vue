<template>
  <section class="single-recipe">
    <h1>{{ recipe.title }}</h1>
    <div>
      <img class="recipe-image" :src="recipe.thumbnail" :alt="recipe.title">
    </div>
    <p>{{ recipe.descriptionText }}</p>
  </section>
</template>

<script>
export default {
    asyncData(context){
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve({
                  recipe: [
                      {
                          id: "1",
                          title: "ส้มตำ",
                          previewText: "ส้มตำความอร่อยที่มาพร้อมกับความแซบ",
                          descriptionText: "รายละเอียดส้มตำ รายละเอียดส้มตำ รายละเอียดส้มตำ รายละเอียดส้มตำ ",
                          thumbnail:"https://cdn.pixabay.com/photo/2015/04/07/07/51/papaya-salad-710613_960_720.jpg"
                      },
                      {
                          id: "2",
                          title: "พิซซ่า",
                          previewText: "พิซซ่าความอร่อยที่มาพร้อมกับความคุ้ม",
                          descriptionText: "รายละเอียดพิซซ่า รายละเอียดพิซซ่า รายละเอียดพิซซ่า รายละเอียดพิซซ่า",
                          thumbnail:"https://th.pic1.sayfamous.com/eating-food/147_0842448005722.jpg"
                      }
                  ].find(el => el.id === context.params.id)
              })
          }, 1500)
      })
  }
}
</script>

<style scoped>
.single-recipe {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 30px;
}

.recipe-image {
    width: 100%;
}
</style>