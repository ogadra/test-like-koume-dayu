# Koume Dayu Style Error Messages

Implementation example of Vitest custom matcher displaying error messages in Koume Dayu's comedy style: "〜かと思ったら〜でした〜チクショー！！" (meaning "I thought it was ~, but it turned out to be ~. Damn it!!")

## Setup

```bash
git clone https://github.com/yourusername/test-like-koume-dayu.git
cd test-like-koume-dayu
npm install
```

## Usage

```bash
$ npm run test

...

 FAIL  koume.test.ts > toBe
Error: expect(received).toBe(expected)

チャンチャカチャンチャンチャンチャンチャンチャン
チャンチャカチャンチャンチャンチャンチャンチャン

2 かと思ったら～、

1 でした～。

チクショー！！

 ❯ koume.test.ts:4:13
      2|
      3| test("toBe", () => {
      4|   expect(1).toBe(2);
       |             ^
      5| });
      6|

...

```

## License

MIT
