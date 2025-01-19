### @flyoutOnly true
### @hideIteration true
### @hideIteration true

# マイクラで鬼ごっこ
## コマンドを使えるようにしよう

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしておこう。

```ghost
player.onChat("ic", function () {
    custom.ice()
})
player.onChat("fi", function () {
    custom.fire()
})
player.onChat("up", function () {
    custom.speed()
})
player.onChat("tp", function () {
    custom.tp()
})
player.onChat("sp", function () {
    custom.spy()
})
player.onChat("ju", function () {
    custom.jump()
})
```

```template
player.onChat("ic", function () {
    custom.ice()
})
player.onChat("fi", function () {
    custom.fire()
})
player.onChat("up", function () {
    custom.speed()
})
player.onChat("tp", function () {
    custom.tp()
})
player.onChat("sp", function () {
    custom.spy()
})
player.onChat("ju", function () {
    custom.jump()
})
```