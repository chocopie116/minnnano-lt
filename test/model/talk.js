var assert = require('power-assert')
    Talk = require('../../model/talk');

describe('Talkモデルのテスト', function() {
    it('何もしていない状態はcountは0で、名前は名無しさんが返るはず', function() {
        var talk = Talk.findCurrent();

        assert(0 === talk.getCount());
        assert('名無しさん' === talk.getSpeaker());
    });

    it ('カウントアップしたら、数字が1上がる', function() {
        var talk = Talk.findCurrent();
        var afterCount = talk.countUp();

        assert(1 === afterCount);
    });

    it ('１つのプロセスで実行すればcountは１のまま', function() {
        var talk = Talk.findCurrent();

        assert(1 === talk.getCount());
    });

    it('次のスピーカーになったらcountは0', function() {
        var talk = Talk.findCurrent();
        talk.nextSpeaker('佐藤さん');

        assert(0 === talk.getCount());
        assert('佐藤さん' === talk.getSpeaker());
    });

    it('リセットしたら、countは0で、名前も名無しになる', function() {
        var talk = Talk.findCurrent();
        talk.reset();

        assert(0 === talk.getCount());
        assert('名無しさん' === talk.getSpeaker());
    });
});
