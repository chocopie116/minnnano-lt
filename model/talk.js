/***
 * インメモリで動作させる
 */
var count = 0,
    speaker = '名無しさん';

var Talk = function() {
    //ゲッター
    this.getCount = function() {
        return count;
    }
    this.getSpeaker = function() {
        return speaker;
    }

    //テスト用リセットする
    this.reset = function() {
        count = 0;
        speaker = '名無しさん';
    }

    //カウントアップ
    this.countUp = function() {
        count++;
        return count;
    }

    this.nextSpeaker = function(name) {
        if (speaker != name) {
            speaker = name;
            count = 0;
        }
    }
}

/**
 * 現在のトークを取得する
 */
exports.findCurrent = function() {
    return new Talk();
}
