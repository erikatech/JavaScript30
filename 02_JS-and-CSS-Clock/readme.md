# 🕚 JS and CSS Clock
現在の時刻を表示するアナログ時計を制作しました！

## 🎬 Video
https://github.com/erikatech/JavaScript30/assets/155863891/174ca6f7-52db-41ed-b7cc-a731b966524a

## 👩🏽‍🍳 Process
1. `setDate()` にて、日時の処理をまとめる
	1. `new Date()` で現在の日時を取得
	2. 時間・分数・秒数をそれぞれのメソッドで取得
	3. `rotate` に対応できるよう調整
	4. 各々のクラスにスタイルを追加
2. `setInterval()` にて、`setDate()` を1秒ごとに実行

## 📚 What I Learned

```
const secondsDegrees = (seconds / 60) * 360 + 90;
```
1. (seconds / 60): <br>現在の秒数を60で割り、時計のどの位置にあるか算出

2. *360: <br>上記に360度を掛けることで、針の角度を取得

3. +90: <br>CSSで調整した基準点（`transform: rotate(90deg);`）にあわせるため、調整の意味で追加