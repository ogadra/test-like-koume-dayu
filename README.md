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

> test
> vitest


 DEV  v3.0.7 /path/to/your/project

 ❯ koume.test.ts (2 tests | 2 failed) 4ms
   × toBeLikeKomeDayu 3ms
     → チャンチャカチャンチャンチャチャンチャチャンチャン
2かと思ったら～、1 でした～。チクショー！！
   × toBeLikeKomeDayu not 0ms
     → チャンチャカチャンチャンチャチャンチャチャンチャン
1ではないかと思ったら～、1 でした～。チクショー！！

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 2 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  koume.test.ts > toBeLikeKomeDayu
Error: チャンチャカチャンチャンチャチャンチャチャンチャン
2かと思ったら～、1 でした～。チクショー！！
 ❯ koume.test.ts:4:13
      2|
      3| test("toBeLikeKomeDayu", () => {
      4|   expect(1).toBeLikeKomeDayu(2);
       |             ^
      5| });
      6|

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/2]⎯

 FAIL  koume.test.ts > toBeLikeKomeDayu not
Error: チャンチャカチャンチャンチャチャンチャチャンチャン
1ではないかと思ったら～、1 でした～。チクショー！！
 ❯ koume.test.ts:8:17
      6|
      7| test("toBeLikeKomeDayu not", () => {
      8|   expect(1).not.toBeLikeKomeDayu(1);
       |                 ^
      9| });
     10|

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/2]⎯


 Test Files  1 failed (1)
      Tests  2 failed (2)
   Start at  16:04:32
   Duration  210ms (transform 19ms, setup 14ms, collect 4ms, tests 4ms, environment 0ms, prepare 39ms)

 FAIL  Tests failed. Watching for file changes...
       press h to show help, press q to quit
```

## License

MIT
