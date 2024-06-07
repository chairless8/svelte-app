<div class="flex h-full w-full flex-col max-heigth">
    <div class="flex-grow p-8">
        <slot />
    </div>
</div>

<style>
.max-heigth {
    max-height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
}
</style>