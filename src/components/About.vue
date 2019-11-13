<template>
  <div>
    <b-card class="about-me">
      <b-media>
        <template v-slot:aside>
          <b-img src="https://i.pinimg.com/originals/9f/b9/e0/9fb9e0be161722254c128f378d046b9c.jpg" width="64" alt="placeholder"></b-img>
        </template>

        <h5 class="mt-0">Why I like coding</h5>
        <p>
          I love the fact that I get paid to do something that I would do for free. I love solving puzzles and that is what programming really is. I'm the type of person that is unhappy with monotonous tasks and has to learn something new every day. Being a programmer forces me to do that on a constant basis. Not only new technologies (which I think is a given when you enter this field) but also new areas of business.
        </p>

        <b-media>
          <template v-slot:aside>
            <b-img src="https://mybroadband.co.za/news/wp-content/uploads/2016/01/Programmer-working-computer-code.jpg" width="64" alt="placeholder"></b-img>
          </template>

          <h5 class="mt-0">Goal</h5>
          <p class="mb-0">
            I have a strong attitude to achieving my goals. I aim at making sure I create and provide value using my skills and abilities.
          </p>
        </b-media>
      </b-media>
    </b-card>
  </div>
</template>

<style>
.about-me{
  margin-top: 10px;
}

#tb{
  content: center;
}
</style>