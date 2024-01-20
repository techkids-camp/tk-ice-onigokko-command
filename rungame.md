### @flyoutOnly true
### @hideIteration true
### @hideIteration true

# コマンドを使えるようにしよう

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてgoとrunをいれてプログラムをうごかしてみよう！

```ghost

custom.speed()
custom.hole()
custom.jump()
custom.spy()
custom.tp()
```

```template
player.onChat("sp", function () {
    custom.speed()
})
player.onChat("tp", function () {
    custom.tp()
})
player.onChat("jmp", function () {
    custom.jump()
})
player.onChat("hol", function () {
    custom.hole()
})
player.onChat("spy", function () {
    custom.spy()
})

```