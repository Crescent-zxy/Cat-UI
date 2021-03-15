<template>
  <button class="cat-button" :class="classes" :disabled="disabled">
    <div v-if="loading" class="cat-loadingIndicator"></div>
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const { theme, size, level } = props;
    const classes = computed(() => ({
      [`cat-theme-${theme}`]: theme,
      [`cat-size-${size}`]: size,
      [`cat-level-${level}`]: level,
    }));
    return { classes };
  },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$pink: #f29c9f;
$darkPink: #fa3d7c;
$radius: 4px;
$red: red;
$grey: grey;
.cat-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  margin: 10px 5px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  &:hover,
  &:focus {
    color: $pink;
    border-color: $pink;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.cat-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $pink;
    &:hover,
    &:focus {
      color: lighten($pink, 10%);
    }
  }
  &.cat-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.cat-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.cat-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.cat-theme-button {
    &.cat-level-main {
      background: $pink;
      color: white;
      border-color: $pink;
      &:hover,
      &:focus {
        background: darken($pink, 10%);
        border-color: darken($pink, 10%);
      }
    }
    &.cat-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.cat-theme-link {
    &.cat-level-main {
      color: $darkPink;
      &:hover,
      &:focus {
        color: lighten($darkPink, 10%);
      }
    }
    &.cat-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.cat-theme-text {
    &.cat-level-main {
      color: $pink;
      &:hover,
      &:focus {
        color: darken($pink, 10%);
      }
    }
    &.cat-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.cat-theme-link,
  &.cat-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .cat-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    // border-color: #a6d7ff #73c0ff #40a9ff transparent;
    border-color: #f5bcc5 #f5ab9f #f29c9f transparent;
    border-style: solid;
    border-width: 2px;
    animation: cat-spin 1.5s infinite linear;
  }
}
@keyframes cat-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>