<template>
	<ArticlePage title="せいかく">
		<CardView>
			<ArticleParagraph title="自覚">
				<ul>
					<li>徹底的にマイペース、モチベーションはどこかに置いてきている</li>
					<li>やる気が出ると燃え尽きるまで突き進む</li>
					<li>ものごとの「なぜ」に重心を置く</li>
					<li>完璧主義/優柔不断/軸はブレない</li>
					<li>空気が読めないわけではないが足並みは合わせない</li>
				</ul>
				<h3>得意</h3>
				<ul>
					<li>ものごとの体系化や論理的な分析</li>
					<li>目標に対する最適解を追求し続けること</li>
				</ul>
				<h3>苦手</h3>
				<ul>
					<li>勢いまかせ・非生産的な言動</li>
					<li>根拠のない考えの押しつけ</li>
					<li>行動に実績を要求されること</li>
				</ul>
			</ArticleParagraph>
		</CardView>
		<CardView>
			<ArticleParagraph title="CIY トーテム">
				<a target="_blank" href="https://ciy-totem.com/question-share/oO1YW7csD1/zFuiIvmlKt"><img
						alt="CIY トーテム: 炎の皇帝" src="/assets/ciy-totem.png" /></a>
			</ArticleParagraph>
		</CardView>
		<CardView>
			<ArticleParagraph title="Mentuzzle 「もしも魔法が使えたら？」 習得魔法">
				<a target="_blank"
					href="https://mentuzzle.com/shindan/original/moshimaho/type/Spatiotemporal-alpha"><img
						alt="時空間魔法"
						src="https://mentuzzle.com/view/shindan/original/moshimaho/asset/img/result/type/Spatiotemporal/ogp_beta.png" /></a>
				<FolderView title="詳細" :expanding="false">
						<p><code>2025-08-11 04:17:00+0900</code></p>
						<h3>概要</h3>
						<p>
							⏳Spatiotemporal + 💗Psyche (🎲Fortunist)
						</p>
						<ul>
							<li>孤独を愛する</li>
							<li>許容しがたい気持ち</li>
							<li>期待と恐れが入り交じる</li>
							<li>好きなもの優先したい</li>
							<li>不摂生</li>
						</ul>
						<h3>指標</h3>
						<dl>
							<dt>本能的エネルギー: 22%</dt>
							<dd><ProgressGauge label="勝利欲求" color="#f25d18" value-display="percentage" :value="0.22" /></dd>
							<dd><ProgressGauge label="競争的態度" color="#f25d18" value-display="percentage" :value="0.22" /></dd>
							<dt>個人的領域: 86%	</dt>
							<dd><ProgressGauge label="内的傾向" color="#4691b3" value-display="percentage" :value="0.75" /></dd>
							<dd><ProgressGauge label="回避傾向" color="#4691b3" value-display="percentage" :value="0.97" /></dd>
							<dt>心の温度: 50%</dt>
							<dd><ProgressGauge label="感受性" color="#e846a7" value-display="percentage" :value="0.47" /></dd>
							<dd><ProgressGauge label="協調性" color="#e846a7" value-display="percentage" :value="0.52" /></dd>
							<dt>隙と戒め: 43%</dt>
							<dd><ProgressGauge label="倫理観" color="#6ed941" value-display="percentage" :value="0.63" /></dd>
							<dd><ProgressGauge label="行動一貫性" color="#6ed941" value-display="percentage" :value="0.22" /></dd>
							<dt>自己解離性: 69%</dt>
							<dd><ProgressGauge label="自己批評性" color="#8517e3" value-display="percentage" :value="0.63" /></dd>
							<dd><ProgressGauge label="対人不安性" color="#8517e3" value-display="percentage" :value="0.75" /></dd>
						</dl>
						<h3>スキル</h3>
						<p>
							Precognitive Sight lv.4
						</p>
						<ul>
							<li><ProgressGauge  label="攻撃力" color="#bf565a" value-display="value" :value="55357" :max="132859" /></li>
							<li><ProgressGauge  label="防御力" color="#567fbf" value-display="value" :value="77501" :max="132859" /></li>
							<li><ProgressGauge  label="反応速度" color="#7cbdbf" value-display="value" :value="82106" :max="132859" /></li>
							<li><ProgressGauge  label="運" color="#d982ab" value-display="value" :value="96973" :max="132859" /></li>
						</ul>
				</FolderView>
			</ArticleParagraph>
		</CardView>
		<CardView>
			<ArticleParagraph title="各種診断実行結果">
				<div>
					<FolderView title="注意事項" :expanding="false">
						<p>
							これらの診断はユングのタイプ論、およびその他の精神タイプ分類論に基づく結果を示していますが、
							これらの結果は他者とのカウンセリング等を行っておらず、自己推定に基づく結果であることに留意してください。
						</p>
					</FolderView>
					<div>
						Mentuzzle 16タイプ性格診断実行結果:
						<a href="https://mentuzzle.com/shindan/report/16type/type/INTJ">INTJ-C</a>
					</div>
					<FolderView title="詳細" :expanding="false">
						<p><code>2025-02-07 03:18:15+0900</code></p>
						<ProgressGauge label="Fi" value-display="value" color="#c95353" :min="-86" :max="86"
							:value="-4" />
						<ProgressGauge label="Fe" value-display="value" color="#D95782" :min="-86" :max="86"
							:value="-18" />
						<ProgressGauge label="Ti" value-display="value" color="#4b5ba6" :min="-86" :max="86"
							:value="54" />
						<ProgressGauge label="Te" value-display="value" color="#62b5d9" :min="-86" :max="86"
							:value="-11" />
						<ProgressGauge label="Si" value-display="value" color="#e6cd73" :min="-86" :max="86"
							:value="41" />
						<ProgressGauge label="Se" value-display="value" color="#d9a557" :min="-86" :max="86"
							:value="-40" />
						<ProgressGauge label="Ni" value-display="value" color="#60b5bf" :min="-86" :max="86"
							:value="58" />
						<ProgressGauge label="Ne" value-display="value" color="#68b376" :min="-86" :max="86"
							:value="-2" />
					</FolderView>
					<FolderView title="履歴" :expanding="false">
						<ul>
							<li><code>2024-10-11 04:10:54+0900</code> INTP-C</li>
						</ul>
					</FolderView>
				</div>
				<div>
					<div>
						Mentuzzle 9エニア・デルタタイプ診断実行結果:
						<a href="https://mentuzzle.com/shindan/report/9ennea/type/6holy">6w5 holy △641 sx>sp</a>
					</div>
					<FolderView title="詳細" :expanding="false">
						<p><code>2025-02-09 18:39:08+0900</code></p>
						<ProgressGauge label="1" value-display="value" color="white" :max="42" :value="32" />
						<ProgressGauge label="2" value-display="value" color="gray" :max="42" :value="32" />
						<ProgressGauge label="3" value-display="value" color="gray" :max="42" :value="22" />
						<ProgressGauge label="4" value-display="value" color="white" :max="42" :value="37" />
						<ProgressGauge label="5" value-display="value" color="lightgray" :max="42" :value="39" />
						<ProgressGauge label="6" value-display="value" color="var(--accent-color)" :max="42"
							:value="42" />
						<ProgressGauge label="7" value-display="value" color="gray" :max="42" :value="20" />
						<ProgressGauge label="8" value-display="value" color="gray" :max="42" :value="32" />
						<ProgressGauge label="9" value-display="value" color="gray" :max="42" :value="28" />
						<ProgressGauge label="sp" value-display="value" color="lightgray" :max="24" :value="17" />
						<ProgressGauge label="so" value-display="value" color="gray" :max="24" :value="11" />
						<ProgressGauge label="sx" value-display="value" color="var(--accent-color)" :max="24"
							:value="24" />
					</FolderView>
					<FolderView title="履歴" :expanding="false">
						<ul>
							<li><code>2024-10-11 03:16:47+0900</code> 4w5 △461 sx>so</li>
						</ul>
					</FolderView>
				</div>
				<div>
					<div>
						性格診断セブン 辛口性格診断16実行結果:
						<a href="https://xn--16-573d25rtpd1v4e.com/intp.php">INTP</a>
					</div>
					<p><code>2025-02-07 03:44:00+0900</code></p>
					<FolderView title="履歴" :expanding="false">
						<ul>
						</ul>
					</FolderView>
				</div>
				<div>
					<div>
						16personalities.com 診断実行結果:
						<a href="https://www.16personalities.com/intp-personality">INTP-T</a>
					</div>
					<FolderView title="詳細" :expanding="false">
						<p><code>2025-07-11 01:35:00+0900</code></p>
						<ProgressGauge label="Introverted" value-display="percentage" :value="0.89" />
						<ProgressGauge label="Intuitive" value-display="percentage" :value="0.66" />
						<ProgressGauge label="Thinking" value-display="percentage" :value="0.59" />
						<ProgressGauge label="Prospecting" value-display="percentage" :value="0.75" />
						<ProgressGauge label="Turbulent" value-display="percentage" :value="0.68" />
					</FolderView>
					<FolderView title="履歴" :expanding="false">
						<ul>
						</ul>
					</FolderView>
				</div>
			</ArticleParagraph>
		</CardView>
	</ArticlePage>
</template>

<script setup>
import ArticlePage from '@/components/ArticlePageTemplate.vue';
import ArticleParagraph from '@/components/ArticleParagraphTemplate.vue';
import CardView from '@/components/CardView.vue';
import FolderView from '@/components/FolderView.vue';
import ProgressGauge from '@/components/ProgressGauge.vue';
</script>

<style scoped></style>
