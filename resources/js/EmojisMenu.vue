<template>
        <div class="inline-block relative">
                <button
                        class="bard-toolbar-button"
                        :class="{
                                active: showEmojiMenu
                        }"
                        v-html="button.html"
                        v-tooltip="button.text"
                        @click="showEmojiMenu = !showEmojiMenu"
                />
                <div
                        class="absolute left-10 bg-white px-1 rounded-lg grid grid-cols-10 min-w-250 lg:min-w-500 z-10 max-h-300px overflow-y-scroll border-2 border-gray-5000"
                        :class="{ hidden: !showEmojiMenu }"
                >
                        <template v-for="(emoji, index) in emojis">
                                <div
                                        @click="setChar(emoji)"
                                        :key="index"
                                        class="py-1 hover:bg-gray-200 justify-start cursor-pointer items-center my-1 text-xl"
                                >
                                        <p class="text-center">
                                                {{ emoji }}
                                        </p>
                                </div>
                        </template>
                </div>
        </div>
</template>
<script>
import emojis from "./emojis";

export default {
        mixins: [BardToolbarButton],
        data() {
                return {
                        showEmojiMenu: false,
                        emojis,
                        getMarkAttrs: this.editor.getMarkAttrs.bind(this.editor)
                };
        },
        methods: {
                setChar(char) {
                        console.log("char", char);
                        this.editor.commands.emoji({ char: char });
                        this.showEmojiMenu = false;
                }
        },
        mounted() {}
};
</script>
<style>
.overflow-y-scroll {
        overflow-y: scroll;
}
.max-h-300px {
        max-height: 300px;
}
.max-h-320px {
        max-height: 300px;
}
.px-1 {
        padding-left: 0.25rem;
        padding-right: 0.25rem;
}
.py-1 {
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
}
.cursor-pointer {
        cursor: pointer;
}
.hover\:bg-gray-300:hover {
        background-color: rgba(209, 213, 219, 1);
}
.z-10 {
        z-index: 10;
}
.text-center {
        text-align: center;
}
.mx-1 {
        margin-left: 0.25rem;
        margin-right: 0.25rem;
}
.mx-2 {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
}
.mr-2 {
        margin-right: 0.5rem;
}
.mt-2 {
        margin-top: 0.5rem;
}
.my-1 {
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
}
.rounded-xl {
        border-radius: 0.75rem;
}
.bg-gray-50 {
        background-color: rgba(249, 250, 251, 1);
}
.bg-gray-200 {
        background-color: rgba(229, 231, 235, 1);
}
.flex {
        display: flex;
}
.flex-wrap {
        flex-wrap: wrap;
}
.items-center {
        align-items: center;
}
.flex-row {
        flex-direction: row;
}
.flex-col {
        flex-direction: column;
}
.justify-center {
        justify-content: center;
}
.justify-start {
        justify-content: start;
}
.w-6 {
        width: 1.5rem;
}
.h-6 {
        height: 1.5rem;
}
@media (min-width: 0px) {
        .w-full {
                width: 100%;
        }
        .w-1\/4 {
                width: 25%;
        }
        .w-1\/2 {
                width: 50%;
        }
        .min-w-250 {
                min-width: 250px;
        }
        .min-w-500 {
                min-width: 500px;
        }
}
@media (min-width: 640px) {
        .sm\:text-xl {
                font-size: 1.25rem;
                line-height: 1.75rem;
        }
        .sm\:w-full {
                width: 100%;
        }
        .sm\:w-1\/4 {
                width: 25%;
        }
        .sm\:w-1\/2 {
                width: 50%;
        }
}
@media (min-width: 768px) {
        .md\:w-full {
                width: 100%;
        }
        .md\:w-1\/4 {
                width: 25%;
        }
        .md\:w-1\/2 {
                width: 50%;
        }
}
@media (min-width: 1280px) {
        .lg\:w-full {
                width: 100%;
        }
        .lg\:w-1\/4 {
                width: 25%;
        }
        .lg\:w-1\/2 {
                width: 50%;
        }
        .lg\:min-w-250 {
                min-width: 250px;
        }
        .lg\:min-w-500 {
                min-width: 500px;
        }
}
</style>
