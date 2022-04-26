export const copyText = (text: string): boolean => {
  let copied: boolean = false
    if(!navigator.clipboard){
        const el = document.createElement("input");
        el.style.position = "absolute";
        el.style.left = "-99999px";
        el.setAttribute("aria-hidden", "true");
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy')
        copied = true
    }else{
        navigator.clipboard.writeText(text).then(() => {
          copied = true
        }).catch((err) => { copied = false } )
  }
  return copied
}


