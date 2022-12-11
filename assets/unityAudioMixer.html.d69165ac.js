import{_ as e,V as i,W as n,a0 as d}from"./framework.f50e9d47.js";const a={},l=d(`<h3 id="slider-onvaluechanged-addlistener" tabindex="-1"><a class="header-anchor" href="#slider-onvaluechanged-addlistener" aria-hidden="true">#</a> slider.onValueChanged.AddListener</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>slider.onValueChanged.AddListener((float v) =&gt;
        {//v等价于slider.value
            AudioTuning.Instance.SetMasterVolume(v);
        });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="audiotuning" tabindex="-1"><a class="header-anchor" href="#audiotuning" aria-hidden="true">#</a> AudioTuning:</h4><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class AudioTuning : SingLeton&lt;AudioTuning&gt;
{
    [SerializeField] AudioMixer audioMixer;
    public void SetMasterVolume(float volume)
    {
        audioMixer.SetFloat(&quot;MasterVolume&quot;, volume);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),s=[l];function r(u,c){return i(),n("div",null,s)}const o=e(a,[["render",r],["__file","unityAudioMixer.html.vue"]]);export{o as default};
