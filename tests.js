// Append
// With text - working
$l("li").append(" - location");

// TODO: Is append properly inserting jQuery-lite elements?
// It is not behaving like the jQuery version.

let left = $(".left");
let li = $("<li>");
left.append(li);

// Does not work (error_)
let lleft = $l(".left");
let lli = $l("<li>");
left.append(lli);

// Gives a different response
let lleft = $l(".left");
let lright = $l(".right");
left.append(lright);

let jleft = $(".left");
let jright = $(".right");
jleft.append(jright);
