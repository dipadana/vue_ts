<template>
  <div id="app">
    <q-toolbar>
      <q-toolbar-title>Dipadana VueTypeCompAPI</q-toolbar-title>
      <q-space/>
      <q-btn
        flat
        label="Home"
        to="/"
      />
      <q-btn
        flat
        label="About"
        to="/about"
      />
    </q-toolbar>
    <router-view/>
  </div>
</template>
