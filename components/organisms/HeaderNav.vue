<template>
  <!--
    Header Navigation Component
    --------------------------
    - Shows site logo and main navigation links
    - Responsive flex layout
    - Uses NavItem atoms for links
  -->
  <header class="header">
    <h2 class="logo">Pangasinan Heritage</h2>
    <nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/sites">Sites</NavItem>
      <NavItem to="/about">About</NavItem>
    </nav>
  </header>
</template>

<style scoped>
/* =====================================
   HEADER WRAPPER
===================================== */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-md);
  background: var(--white);
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  flex-wrap: wrap;
  gap: var(--space-md);
}

/* =====================================
   SITE LOGO
===================================== */
.logo {
  font-size: var(--text-lg);
  font-weight: 700;
  color: #2e4d2e; /* earthy green */
}

/* =====================================
   NAVIGATION
===================================== */
nav {
  display: flex;
  gap: var(--space-md);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  nav {
    width: 100%;
    justify-content: center;
  }
}
</style>