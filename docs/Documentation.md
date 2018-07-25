# subs/make 
  In an attempt to simplify regular expressions for everyone I broke down the expression into three parts: the opening, the string, and the close;

  Though one is still able to just put a complete regex into the string position, leaving the abstracted open and close undefined.
  * ex. -t "string replace" -o "(^|(\W+))" -s "(no|not|never)" -e "(?=(\W+)|(s))" -r " ni!"

#### example box titles and descriptions
sans sin: without sin, or without without; you are always right in whatever it is you are doing

last is the first: live every year remembering great times spent together

anagram: of first word of sentence; hello, everyone left lovely ornaments

expressing positives: completely disallows negatives

expelling negatives: highlights negative constructions as you write refusing to save while any are left

multiple boxes, boxes a, b, c, d, then roman numerals (i)

box d is whatever rule set i use, prohibiting negatives, all lowercase, fullstops are new lines, only commas, colon ends with semicolon, without parenthesis,

box (xvii) is a friendly message i will update regularly.

:only allow words longer in one box, and words shorter in another; first line should be a number that states length
disallow words starting or ending in specified string
disallow word pairs

:save button runs long animation of fade out once clicked,
when finished saving it flashes full then empty then remains full again,
awaiting the next save

:make a localstorage json object that acts like a template for the user's settings,
present it as a potential configuration file

:since it works in snippets of entire this.value, have button that allows for one time full scan of entire document in case of copy and paste text

:create communicable api that allows POST box creation, 
first argument sent to api should be number of boxes adding, 
if number is too big, 
return error of too big and suggest smaller size, 
ie 10000 is too large try only 100... 
then limit number allowed from each ip by day by storing the ip in database with amount submitted and add or subtract that value, 
remove ip from db as the track expires

