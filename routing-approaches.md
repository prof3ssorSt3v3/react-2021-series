## Base Layout

```html
<div class="App">
  <header />
  <SearchBar />
  <main class="content">
    <!-- removed the SearchHistory column -->
    <MainComponent />
  </main>
</div>
```

## Main approach one

```html
<MainComponent>
  <!-- state built inside Main -->
  <div class="mainContent">
    <!-- state shared with People and Person via props -->
    <div><People /> list in here</div>
    <div><Person /> details in here</div>
    <!-- Person can be inside People too -->
  </div>
</MainComponent>
```

#Main approach two

```html
<MainComponent>
  <div class="mainContent">
    <Planets>
      <!-- state built inside Planets -->
      <div>list goes here</div>
      <!-- state shared from Planets to Planet via props -->
      <div><Planet /> details in here</div>
    </Planets>
  </div>
</MainComponent>
```
