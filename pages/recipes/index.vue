<template>
  <section class="recipes">
    <Recipe
      v-for="recipe in recipes"
      :key="recipe.id"
      :thumbnail="recipe.thumbnail"
      :title="recipe.title"
      :id="recipe.id"
      :previewText="recipe.previewText"
    />
  </section>
</template>

<script>
import Recipe from '@/components/Recipe'
import { resolve, reject } from 'q'
export default {
  components: {
    Recipe
  },
  asyncData(){
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve({
                  recipes: [
                      {
                          id: "1",
                          title: "ส้มตำ",
                          previewText: "ส้มตำความอร่อยที่มาพร้อมกับความแซบ",
                          thumbnail:"https://cdn.pixabay.com/photo/2015/04/07/07/51/papaya-salad-710613_960_720.jpg"
                      },
                      {
                          id: "2",
                          title: "พิซซ่า",
                          previewText: "พิซซ่าความอร่อยที่มาพร้อมกับความคุ้ม",
                          thumbnail:"https://th.pic1.sayfamous.com/eating-food/147_0842448005722.jpg"
                      }
                  ]
              })
          }, 1500)
      })
  }
};
</script>

<style scoped>
.recipes {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
</style>