/***
 * インメモリで動作させる
 */
var count = 0,
    totalCount = 0, //for Logging
    talkResult = [],
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
        totalCount++;
        if (totalCount % 50 == 0) {
            console.log('現在の総合へぇ数は ' + totalCount + 'です.');
        }
        return count;
    }

    this.nextSpeaker = function(name) {
        if (speaker == name) {
            return false;
        }

        talkResult.push({speaker: speaker, count: count});
        console.log(talkResult);

        speaker = name;
        count = 0;
        return true;
    }
}

/**
 * 現在のトークを取得する
 */
exports.findCurrent = function() {
    return new Talk();
}
