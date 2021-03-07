+++
Title = "Pay Caleb Jasik"
Type = "standalone"
Slug = "/pay"
+++

Via Venmo:

- [$5]({{< danger-ref href="/pay/5" >}})
- [$10]({{< danger-ref href="/pay/10" >}})
- [$20]({{< danger-ref href="/pay/20" >}})

Or any amount at `https://jasik.xyz/pay/{$X}`

<form id="form" class="limit" action="" method="get">
<label for="amount">Amount:</label>
<input id="amount" type="number" placeholder="Amount"></input>
<label for="reason">Reason:</label>
<input id="reason" type="text" placeholder="Reason" limit="500"></input>
<button type="submit">Go</button>
<button id="copy-to-clipboard" type="button" title="Copy to clipboard"><svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg><span class="sr-only">Copy to clipboard</span></button>
</form>
<script>
const copy = function() {
    const amount = document.querySelector("#amount");
    const reason = document.querySelector("#reason");
  navigator.clipboard.writeText(`${window.location.protocol}${window.location.host}/pay/${encodeURIComponent(amount.value)}?note=${encodeURIComponent(reason.value)}`);
}
const submit = function(event) {
    event.preventDefault();
    const amount = document.querySelector("#amount");
    const reason = document.querySelector("#reason");
  window.location.assign(`${window.location.protocol}//${window.location.host}/pay/${encodeURIComponent(amount.value)}?note=${encodeURIComponent(reason.value)}`);
}
document.getElementById("copy-to-clipboard").addEventListener("click", copy);
document.getElementById("form").addEventListener("submit", submit);
</script>
