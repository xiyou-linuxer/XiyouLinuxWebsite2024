// https://vitepress.dev/zh/guide/custom-theme
import type { Theme } from 'vitepress'
import { Icon } from '@iconify/vue'
import DefaultTheme from 'vitepress/theme-without-fonts'
import { h } from 'vue'

import Footer from '../components/Footer.vue'
import NotFound from '../components/NotFound.vue'

import './theme-enhanced.css'
import './style.css'

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/zh/guide/extending-default-theme#layout-slots
            'doc-bottom': () => h(Footer),
            'not-found': () => h(NotFound),
        })
    },
    // enhanceApp({ app, router, siteData }) {
    enhanceApp({ app }) {
        app.component('Icon', Icon)
    },
} satisfies Theme
