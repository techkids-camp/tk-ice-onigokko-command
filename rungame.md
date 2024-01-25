### @flyoutOnly true
### @hideIteration true
### @hideIteration true

# マイクラで鬼ごっこ
## コマンドを使えるようにしよう

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしておこう。

```ghost

custom.speed()
custom.hole()
custom.jump()
custom.spy()
custom.tp()
```

```template
player.onChat("up", function () {
    custom.speed()
})
player.onChat("tp", function () {
    custom.tp()
})
player.onChat("ju", function () {
    custom.jump()
})
player.onChat("ho", function () {
    custom.hole()
})
player.onChat("sp", function () {
    custom.spy()
})

```