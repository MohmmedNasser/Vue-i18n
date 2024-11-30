<script setup>
import { useI18n } from 'vue-i18n';

const { t, d, n, locale, availableLocales } = useI18n({ useScope: 'global' });

</script>

<template>
  <header>
    <div class="container">
      <div class="header-inner">
        <nav>
          <a href="#">
            {{ t('nav.home') }}
          </a>
          <a href="#">
            {{ t('nav.about') }}
          </a>
          <a href="#">
            {{ t('nav.service') }}
          </a>
        </nav>
        <div class="change-lang">
          <select v-model="locale">
            <option :value="lang" v-for="lang, index in availableLocales" :key="`locale-${lang}`">{{ lang }}</option>
          </select>
        </div>
      </div>
    </div>

  </header>
  <main>

    <div class="container">
      <div class="card-wrap">
        <div class="card">
          <h5>Lang : {{ locale }}</h5>
          <p>Default</p>
          <h1 :dir="locale == 'ar' ? 'rtl' : 'ltr'">
            {{ t('greet') }}
          </h1>
        </div>


        <div class="card">
          <div class="top">
            <h5>Lang : {{ locale }}</h5>
            <p>Named interpolation</p>
          </div>
          <h1 :dir="locale == 'ar' ? 'rtl' : 'ltr'">
            {{ t('greetUser', { user: 'Mohammed' }) }}
          </h1>
        </div>


        <div class="card">
          <div class="top">
            <h5>Lang : {{ locale }}</h5>
            <p>Linked messages</p>
          </div>
          <h1 :dir="locale == 'ar' ? 'rtl' : 'ltr'">
            {{ t('name') }}
          </h1>
        </div>

        <div class="card">
          <div class="top">
            <h5>Lang : {{ locale }}</h5>
            <p>Modifiers : upper</p>
          </div>
          <h1 :dir="locale == 'ar' ? 'rtl' : 'ltr'">
            {{ t('namelower', { user: 'Khaild' }) }}
          </h1>
        </div>

        <div class="card">
          <div class="top">
            <h5>Lang : {{ locale }}</h5>
            <p>Modifiers : lower</p>
          </div>
          <h1 :dir="locale == 'ar' ? 'rtl' : 'ltr'">
            {{ t('nameupper', { user: 'Khaild' }) }}
          </h1>
        </div>

        <div class="card">
          <div class="top">
            <h5>Lang : {{ locale }}</h5>
            <p>Modifiers : capitalize</p>
          </div>
          <h1 :dir="locale == 'ar' ? 'rtl' : 'ltr'">
            {{ t('namecapitalize', { user: 'Khaild' }) }}
          </h1>
        </div>

        <div class="card">
          <div class="top">
            <h5>Lang : {{ locale }}</h5>
            <p>Custom Modifiers : snakeCase</p>
          </div>
          <h1 :dir="locale == 'ar' ? 'rtl' : 'ltr'">
            {{ t('customModifiers') }}
          </h1>
        </div>

        <div class="card">
          <div class="top">
            <h5>Lang : {{ locale }}</h5>
            <p>Pluralization: 0</p>
          </div>
          <h1 :dir="locale == 'ar' ? 'rtl' : 'ltr'">
            {{ t('car', 0) }}
          </h1>
        </div>

        <div class="card">
          <div class="top">
            <h5>Lang : {{ locale }}</h5>
            <p>Pluralization: 1</p>
          </div>
          <h1 :dir="locale == 'ar' ? 'rtl' : 'ltr'">
            {{ t('car', 1) }}
          </h1>
        </div>

        <div class="card">
          <div class="top">
            <h5>Lang : {{ locale }}</h5>
            <p>Pluralization: Many</p>
          </div>
          <h1 :dir="locale == 'ar' ? 'rtl' : 'ltr'">
            {{ t('car', 2) }}
          </h1>
        </div>

        <div class="card">
          <div class="top">
            <h5>Lang : {{ locale }}</h5>
            <p>Pluralization: Count</p>
          </div>
          <h1 :dir="locale == 'ar' ? 'rtl' : 'ltr'">
            {{ t('carCount', 10) }}
          </h1>
        </div>

        <div class="card">
          <div class="top">
            <h5>Lang : {{ locale }}</h5>
            <p>Pluralization: Arguments</p>
          </div>
          <h1 :dir="locale == 'ar' ? 'rtl' : 'ltr'">
            {{ t('carArguments', 2) }}
          </h1>
        </div>

        <div class="card">
          <div class="top">
            <h5>Lang : {{ locale }}</h5>
            <p>Pluralization: Email</p>
          </div>
          <h1 :dir="locale == 'ar' ? 'rtl' : 'ltr'">
            {{ t('email', { account: 'm.gamil.m', domain: 'gmail.com' }) }}
          </h1>
        </div>

        <div class="card">
          <div class="top">
            <h5>Lang : {{ locale }}</h5>
            <p>Datetime Formatting: Short</p>
          </div>
          <h1 :dir="locale == 'ar' ? 'rtl' : 'ltr'">
            {{ d(new Date(), 'short') }}
          </h1>
        </div>

        <div class="card">
          <div class="top">
            <h5>Lang : {{ locale }}</h5>
            <p>Datetime Formatting: Long</p>
          </div>
          <h1 :dir="locale == 'ar' ? 'rtl' : 'ltr'">
            {{ d(new Date(), 'long') }}
          </h1>
        </div>

        <div class="card">
          <div class="top">
            <h5>Lang : {{ locale }}</h5>
            <p>Number Formatting: Currency</p>
          </div>
          <h1 :dir="locale == 'ar' ? 'rtl' : 'ltr'">
            {{ n(10000, 'currency') }}
          </h1>
        </div>


        <div class="card">
          <div class="top">
            <h5>Lang : {{ locale }}</h5>
            <p>Number Formatting: Decimal</p>
          </div>
          <h1 :dir="locale == 'ar' ? 'rtl' : 'ltr'">
            {{ n(12.11612345, 'decimal') }}
          </h1>
        </div>

        <div class="card">
          <div class="top">
            <h5>Lang : {{ locale }}</h5>
            <p>Number Formatting: Percent</p>
          </div>
          <h1 :dir="locale == 'ar' ? 'rtl' : 'ltr'">
            {{ n(0.98522, 'percent') }}
          </h1>
        </div>

        <div class="card">
          <div class="top">
            <h5>Lang : {{ locale }}</h5>
            <p>Custom Formatting : i18n-t</p>
          </div>
          <i18n-t tag="h1" keypath="greet" :dir="locale == 'ar' ? 'rtl' : 'ltr'"></i18n-t>
        </div>

        <div class="card">
          <div class="top">
            <h5>Lang : {{ locale }}</h5>
            <p>Custom Formatting : i18n-d</p>
          </div>
          <i18n-d tag="h1" :value="new Date()"
            :format="{ key: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }"
            :dir="locale == 'ar' ? 'rtl' : 'ltr'">
            <template #year='props'>
              <span style="color: red">{{ props.year }}</span>
            </template>
            <template #hour='props'>
              <span style="color: blue; font-weight: 600;">{{ props.hour }}</span>
            </template>
            <template #minute='props'>
              <span style="color: green">{{ props.minute }}</span>
            </template>
          </i18n-d>
        </div>

        <div class="card">
          <div class="top">
            <h5>Lang : {{ locale }}</h5>
            <p>Custom Formatting : i18n-n</p>
          </div>

          <i18n-n tag="h1" :value="45200" format="currency" :dir="locale == 'ar' ? 'rtl' : 'ltr'">
            <template #currency='props'>
              <sup style="color: deeppink; font-size: 20px;">
                {{ props.currency }}
              </sup>
            </template>

            <template #group='props'>
              <span style="color: darkorchid; font-weight: 900">
                {{ props.group }}
              </span>
            </template>

          </i18n-n>
        </div>

      </div>

    </div>

  </main>
</template>

<style scoped>
header {
  background: #3d3d3d;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px 0;
  position: fixed;
  top: 0;
  left: 0;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


header nav {
  display: flex;
  align-items: center;
  gap: 15px;
}

header nav a {
  color: #FFF;
  font-size: 16px;
  padding: 0 10px;
  text-decoration: none;
}


header .change-lang select {
  padding: 2px 15px;
  height: 35px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  outline: none;
  box-shadow: none;
  text-transform: uppercase;
  color: #000;
}

main {
  margin-top: 100px;
  margin-bottom: 100px;
}

.card-wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}


.card {
  padding: 10px;
  border: 1px dashed #DDD;
  border-radius: 10px;
}

.card .top {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.card h1 {
  font-size: 22px;
}

.card p {
  font-size: 12px;
  font-weight: 400;
  margin: 0;
}
</style>
