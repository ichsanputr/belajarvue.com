<script setup>
import { onMounted, defineProps, ref } from "vue";
import Highlight from 'highlight.js'

import Copy from '@/components/Icons/Copy.vue'
import CopyChecked from "@/components/Icons/CopyChecked.vue";

const lang = ref('')
const code = ref('')
const props = defineProps(["lang","code","title","disableCopy"])
const singleCopy = ref(false)

onMounted(() => {
    lang.value = props.lang?.toUpperCase() ?? ''
    lang.value = lang.value.includes('-') ? lang.value.replace('-', ' ') : lang.value

    code.value = Highlight.highlight(props.code, {
        language: props.lang
    }).value;

})

function copyCode() {
    navigator.clipboard.writeText(props.code)
    singleCopy.value = true
}
</script>
<template>
    <div class="wrapper-code-highlight mb-6">
        <div class="header-code-highlight" :class="props.disableCopy ? 'border-disable-copy' : 'border-copy'">
            <div :class="{ 'mr6': !props.disableCopy, 'border-disable-copy': props.disableCopy }"
                class="wrapper-section-code-highlight">
                <div class="wrapper-title-code-highlight">
                    <span>
                        {{ props.title?.toUpperCase() ?? lang }}
                    </span>
                </div>
            </div>
            <div v-if="!props.disableCopy" @click="copyCode" class="wrapper-copy-code-highlight">
                <Copy v-if="!singleCopy" />
                <CopyChecked v-else />
            </div>
        </div>
        <pre v-if="!props.disableCopy"><code class="hljs" v-html="code" :class="'lang-' + `${props.lang}`"></code></pre>
        <pre
            v-else><code class="hljs" v-html="code" :class="'lang-' + `${props.lang}`"></code></pre>
    </div>
</template>
<style>
@import url('https://fonts.cdnfonts.com/css/general-sans?styles=135310');

pre {
    margin: 0 !important;
}

pre code {
    border-radius: 0 0 10px 10px !important;
    margin: 0 !important;
    font-size: 14px;
}

.wrapper-code-highlight {
    background-color: #334155;
    border-radius: 12px;
}

.wrapper-section-code-highlight {
    background-color: #334155;
    border-radius: 10px 10px 10px 0;
    width: 100%;
    height: 100%;
    font-size: 14px;
    display: flex;
    align-items: center;
}

.wrapper-title-code-highlight {
    font-family: 'General Sans', sans-serif;
    padding: 0 16px;
    font-weight: 500;
    font-size: 12px;
    border-radius: 10px 0 0 0;
    background-color: #2563EB;
    display: flex;
    align-items: center;
    height: 100%;
}

.wrapper-copy-code-highlight {
    padding: 0 16px;
    font-weight: 500;
    border-radius: 0 10px 0 10px;
    height: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    background-color: #334155;
    cursor: pointer;
}

.header-code-highlight {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #272822;
    height: 40px;
    color: white;
    width: 100%;
}

.border-copy {
    border-radius: 10px 10px 0 0;
}

.border-disable-copy {
    border-radius: 10px 10px 0 0;
}

.mr6 {
    margin-right: 6px;
}

pre code.hljs {
    display: block;
    overflow-x: auto;
    padding: 1em
}

code.hljs {
    padding: 3px 5px
}

/*
  
  Atom One Dark by Daniel Gamage
  Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax
  
  base:    #282c34
  mono-1:  #abb2bf
  mono-2:  #818896
  mono-3:  #5c6370
  hue-1:   #56b6c2
  hue-2:   #61aeee
  hue-3:   #c678dd
  hue-4:   #98c379
  hue-5:   #e06c75
  hue-5-2: #be5046
  hue-6:   #d19a66
  hue-6-2: #e6c07b
  
  */
.hljs {
    color: #abb2bf;
    background: #282c34
}

.hljs-comment,
.hljs-quote {
    color: #5c6370;
    font-style: italic
}

.hljs-doctag,
.hljs-keyword,
.hljs-formula {
    color: #c678dd
}

.hljs-section,
.hljs-name,
.hljs-selector-tag,
.hljs-deletion,
.hljs-subst {
    color: #e06c75
}

.hljs-literal {
    color: #56b6c2
}

.hljs-string,
.hljs-regexp,
.hljs-addition,
.hljs-attribute,
.hljs-meta .hljs-string {
    color: #98c379
}

.hljs-attr,
.hljs-variable,
.hljs-template-variable,
.hljs-type,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-number {
    color: #d19a66
}

.hljs-symbol,
.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-selector-id,
.hljs-title {
    color: #61aeee
}

.hljs-built_in,
.hljs-title.class_,
.hljs-class .hljs-title {
    color: #e6c07b
}

.hljs-emphasis {
    font-style: italic
}

.hljs-strong {
    font-weight: bold
}

.hljs-link {
    text-decoration: underline
}
</style>