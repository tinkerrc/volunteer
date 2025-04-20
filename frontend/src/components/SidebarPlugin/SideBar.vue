<template>
  <div class="sidebar" data-background-color="white">
    <div class="sidebar-wrapper" id="style-3">
      <!-- Logo Section -->
      <div class="logo-container">
        <img :src="logoSrc" alt="NAMI logo" class="logo-image" />
        <span class="logo-text">Yolo County</span>
      </div>

      <!-- Navigation Links -->
      <ul class="nav">
        <slot name="links">
          <sidebar-link
            v-for="(link, index) in sidebarLinks"
            :key="index"
            :to="link.path"
            :name="link.name"
            :icon="link.icon"
          />
        </slot>
      </ul>
    </div>
  </div>
</template>

<script>
import SidebarLink from "./SidebarLink.vue";
import logo from "@/assets/logo/logo.png";

export default {
  components: {
    SidebarLink,
  },
  props: {
    title: {
      type: String,
      default: "NAMI VMS",
    },
    backgroundColor: {
      type: String,
      default: "white",
    },
    activeColor: {
      type: String,
      default: "white",
      validator: (value) => {
        return ["white", "info", "success", "warning", "danger"].includes(value);
      },
    },
    sidebarLinks: {
      type: Array,
      default: () => [],
    },
    autoClose: {
      type: Boolean,
      default: true,
    },
  },
  provide() {
    return {
      autoClose: this.autoClose,
      addLink: this.addLink,
      removeLink: this.removeLink,
    };
  },
  data() {
    return {
      logoSrc: logo,
      linkHeight: 65,
      activeLinkIndex: 0,
      links: [],
    };
  },
  computed: {
    arrowMovePx() {
      return this.linkHeight * this.activeLinkIndex;
    },
  },
  methods: {
    findActiveLink() {
      this.links.forEach((link, index) => {
        if (link.isActive()) {
          this.activeLinkIndex = index;
        }
      });
    },
    addLink(link) {
      const index = this.$slots.links.indexOf(link.$vnode);
      this.links.splice(index, 0, link);
    },
    removeLink(link) {
      const index = this.links.indexOf(link);
      if (index > -1) {
        this.links.splice(index, 1);
      }
    },
  },
  mounted() {
    this.$watch("$route", this.findActiveLink, {
      immediate: true,
    });
  },
};
</script>

<style scoped>
.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 24px;
}

.logo-image {
  width: 140px;
  height: auto;
  margin-bottom: 8px;
}

.logo-text {
  font-size: 20px;
  font-weight: 600;
  color: #004990;
  font-family: 'Inter', sans-serif;
}

.sidebar-wrapper {
  padding: 1rem;
}

.nav {
  padding-left: 0;
  list-style: none;
}
</style>
