// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import './style.css'
import { Icon } from '@iconify/vue'
import Footer from '../components/Footer.vue'

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
            'doc-bottom': () => h(Footer),
        })
    },
    // enhanceApp({ app, router, siteData }) {
    enhanceApp({ app }) {
        app.component('Icon', Icon)
    },
} satisfies Theme
