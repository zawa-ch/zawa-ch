<template>
	<div class="root">
		<div class="card-area">
			<div class="card">
				<div class="profile"></div>
				<div>
					<div class="name">zawa-ch.</div>
					<TypingLabel class="description" :value="flavorText" />
					<div><a class="console" target="_blank" href="https://geoplanetary.net/@stellar_ch">&gt;&gt;&gt;
							Misskey</a></div>
					<div><a class="console" target="_blank" href="https://github.com/zawa-ch">&gt;&gt;&gt; GitHub</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import TypingLabel from '@/components/TypingLabel.vue';
import { computed } from 'vue';

const flavorTextList = [
	'開発者に見えて開発者ではない、少しだけ開発している開発者',
	'いつも眠たげなMisskeyサーバー管理者',
	'ひよっこC++er',
	'個人サイトはじめました',
	'ミスキストとしては凡人',
	'サーバー建ててるだけの一般家庭です',
	'フライトシューティングでは、無類の無誘導兵器好き',
	'主成分: ミルクティー',
	'好きな飛行機: F-22A',
	'好きな音楽ジャンル: Deep House, Prog. House, Uplifting Trance',
	'Take pride in your work, even if it\'s not prettiest.',
	'Java.Lang.NullPointerException',
	'version 4.3.0',
	'ここが黒歴史とならないことを祈るばかり',
	'犬派か猫派かと聞かれたら、無機物派',
	'ねこは……多分います、よろしくおねがいします',
	'起こさないでください',
	'Zzz...Zzz...',
	'F-22は背中がかわいい',
	'ほみゃー！',
	'X？ なにそれ美味しいの？',
	'Dockerはどっかーん！するもの',
	'zawa-ch. Is Cat ...?',
	'SbWwCuWw:Cw--Sr--:RbCbCbCb:CwCwCwCw',
	'せめて、エンジニアらしく',
	'嘘じゃないもん！ケーキと違って！',
	'こちらzawa-ch.、ミルクティーを確保',
	'インドア系だけど、トラックメイカーではない',
	'<ここに自己紹介を入力>',
]
const textIndex = Math.trunc(Math.random() * flavorTextList.length) % flavorTextList.length;
const flavorText = computed(() => flavorTextList[textIndex])
</script>

<style scoped>
.root {
	overflow-y: scroll;
}

.card-area {
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: calc(100vh - 48pt);
}

.card {
	width: min(max(calc(100% / 3), 360px), calc(100% - 32px));
	border-radius: 16px;
	padding: 16px;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	background-color: var(--base-color-light);
}

.profile {
	width: 80pt;
	min-width: 80pt;
	max-width: 80pt;
	aspect-ratio: 1;
	margin-right: 16pt;
	border-radius: 100%;
	background: center / contain no-repeat url(../assets/profile.png);
}

.name {
	font-size: 175%;
	font-weight: 600;
}

.description {
	font-size: small;
}

.console {
	font-family: 'Courier New', Courier, monospace;
	font-size: small;
	color: #aaa;
}
</style>
