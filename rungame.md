### @flyoutOnly true
### @hideIteration true
### @hideIteration true

# マイクラで鬼ごっこ
## コマンドを使えるようにしよう

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしておこう。

```ghost

custom.speed()
custom.jump()
custom.spy()
custom.tp()
custom.ice()
```

```template
player.onChat("ice", function () {
    custom.ice()
})

player.onChat("up", function () {
    custom.speed()
})
player.onChat("tp", function () {
    custom.tp()
})
player.onChat("ju", function () {
    custom.jump()
})
player.onChat("sp", function () {
    custom.spy()
})

```