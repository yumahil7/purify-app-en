# Scripture sources and verification (King James Version, public domain)

Every verse in the English app is found automatically in the source by `v3src/kjv.py` at build time, checked verse by verse against two independent public-domain KJV datasets, and inserted **word for word**. A verse that fails the check is left out of the app (never guessed).

## Sources

1. aruljohn/Bible-kjv (KJV, public domain): https://github.com/aruljohn/Bible-kjv (text shown in the app)
2. thiagobodruk/bible `json/en_kjv.json` (KJV, public domain): https://github.com/thiagobodruk/bible

Rule: VERIFIED when both texts are identical letter for letter (ignoring spaces, punctuation and case).

Checked: 2026-10-12 · 116 references · verified 116 · excluded 0

| Reference | Result | KJV text |
|---|---|---|
| Genesis 1:29 | ✅ verified | And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth, and every tree, in the which is the fruit of a tree yielding seed; to you it shall be for meat. |
| Genesis 2:2 | ✅ verified | And on the seventh day God ended his work which he had made; and he rested on the seventh day from all his work which he had made. |
| Exodus 34:28 | ✅ verified | And he was there with the LORD forty days and forty nights; he did neither eat bread, nor drink water. And he wrote upon the tables the words of the covenant, the ten commandments. |
| Deuteronomy 8:3 | ✅ verified | And he humbled thee, and suffered thee to hunger, and fed thee with manna, which thou knewest not, neither did thy fathers know; that he might make thee know that man doth not live by bread only, but by every word that proceedeth out of the mouth of the LORD doth man live. |
| Deuteronomy 8:10 | ✅ verified | When thou hast eaten and art full, then thou shalt bless the LORD thy God for the good land which he hath given thee. |
| Joshua 1:9 | ✅ verified | Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest. |
| Joshua 6:15 | ✅ verified | And it came to pass on the seventh day, that they rose early about the dawning of the day, and compassed the city after the same manner seven times: only on that day they compassed the city seven times. |
| 1 Kings 19:7 | ✅ verified | And the angel of the LORD came again the second time, and touched him, and said, Arise and eat; because the journey is too great for thee. |
| 1 Kings 19:8 | ✅ verified | And he arose, and did eat and drink, and went in the strength of that meat forty days and forty nights unto Horeb the mount of God. |
| Ezra 8:23 | ✅ verified | So we fasted and besought our God for this: and he was intreated of us. |
| Nehemiah 1:4 | ✅ verified | And it came to pass, when I heard these words, that I sat down and wept, and mourned certain days, and fasted, and prayed before the God of heaven, |
| Nehemiah 8:10 | ✅ verified | Then he said unto them, Go your way, eat the fat, and drink the sweet, and send portions unto them for whom nothing is prepared: for this day is holy unto our LORD: neither be ye sorry; for the joy of the LORD is your strength. |
| Esther 4:16 | ✅ verified | Go, gather together all the Jews that are present in Shushan, and fast ye for me, and neither eat nor drink three days, night or day: I also and my maidens will fast likewise; and so will I go in unto the king, which is not according to the law: and if I perish, I perish. |
| Psalm 4:8 | ✅ verified | I will both lay me down in peace, and sleep: for thou, LORD, only makest me dwell in safety. |
| Psalm 16:11 | ✅ verified | Thou wilt shew me the path of life: in thy presence is fulness of joy; at thy right hand there are pleasures for evermore. |
| Psalm 23:1 | ✅ verified | The LORD is my shepherd; I shall not want. |
| Psalm 23:2-3 | ✅ verified | He maketh me to lie down in green pastures: he leadeth me beside the still waters. He restoreth my soul: he leadeth me in the paths of righteousness for his name’s sake. |
| Psalm 34:8 | ✅ verified | O taste and see that the LORD is good: blessed is the man that trusteth in him. |
| Psalm 37:24 | ✅ verified | Though he fall, he shall not be utterly cast down: for the LORD upholdeth him with his hand. |
| Psalm 42:1 | ✅ verified | As the hart panteth after the water brooks, so panteth my soul after thee, O God. |
| Psalm 46:1 | ✅ verified | God is our refuge and strength, a very present help in trouble. |
| Psalm 51:10 | ✅ verified | Create in me a clean heart, O God; and renew a right spirit within me. |
| Psalm 63:1 | ✅ verified | O God, thou art my God; early will I seek thee: my soul thirsteth for thee, my flesh longeth for thee in a dry and thirsty land, where no water is; |
| Psalm 73:26 | ✅ verified | My flesh and my heart faileth: but God is the strength of my heart, and my portion for ever. |
| Psalm 103:2 | ✅ verified | Bless the LORD, O my soul, and forget not all his benefits: |
| Psalm 118:24 | ✅ verified | This is the day which the LORD hath made; we will rejoice and be glad in it. |
| Psalm 119:105 | ✅ verified | Thy word is a lamp unto my feet, and a light unto my path. |
| Psalm 121:1-2 | ✅ verified | I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the LORD, which made heaven and earth. |
| Psalm 121:3-4 | ✅ verified | He will not suffer thy foot to be moved: he that keepeth thee will not slumber. Behold, he that keepeth Israel shall neither slumber nor sleep. |
| Psalm 127:2 | ✅ verified | It is vain for you to rise up early, to sit up late, to eat the bread of sorrows: for so he giveth his beloved sleep. |
| Psalm 139:23-24 | ✅ verified | Search me, O God, and know my heart: try me, and know my thoughts: And see if there be any wicked way in me, and lead me in the way everlasting. |
| Psalm 145:15-16 | ✅ verified | The eyes of all wait upon thee; and thou givest them their meat in due season. Thou openest thine hand, and satisfiest the desire of every living thing. |
| Proverbs 16:3 | ✅ verified | Commit thy works unto the LORD, and thy thoughts shall be established. |
| Proverbs 16:32 | ✅ verified | He that is slow to anger is better than the mighty; and he that ruleth his spirit than he that taketh a city. |
| Proverbs 23:20-21 | ✅ verified | Be not among winebibbers; among riotous eaters of flesh: For the drunkard and the glutton shall come to poverty: and drowsiness shall clothe a man with rags. |
| Proverbs 24:16 | ✅ verified | For a just man falleth seven times, and riseth up again: but the wicked shall fall into mischief. |
| Proverbs 25:28 | ✅ verified | He that hath no rule over his own spirit is like a city that is broken down, and without walls. |
| Ecclesiastes 3:1 | ✅ verified | To every thing there is a season, and a time to every purpose under the heaven: |
| Isaiah 26:3 | ✅ verified | Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee. |
| Isaiah 30:15 | ✅ verified | For thus saith the Lord GOD, the Holy One of Israel; In returning and rest shall ye be saved; in quietness and in confidence shall be your strength: and ye would not. |
| Isaiah 40:31 | ✅ verified | But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint. |
| Isaiah 41:10 | ✅ verified | Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness. |
| Isaiah 55:1 | ✅ verified | Ho, every one that thirsteth, come ye to the waters, and he that hath no money; come ye, buy, and eat; yea, come, buy wine and milk without money and without price. |
| Isaiah 58:6-8 | ✅ verified | Is not this the fast that I have chosen? to loose the bands of wickedness, to undo the heavy burdens, and to let the oppressed go free, and that ye break every yoke? Is it not to deal thy bread to the hungry, and that thou bring the poor that are cast out to thy house? when thou seest the naked, that thou cover him; and that thou hide not thyself from thine own flesh? Then shall thy light break forth as the morning, and thine health shall spring forth speedily: and thy righteousness shall go before thee; the glory of the LORD shall be thy rereward. |
| Isaiah 58:6 | ✅ verified | Is not this the fast that I have chosen? to loose the bands of wickedness, to undo the heavy burdens, and to let the oppressed go free, and that ye break every yoke? |
| Isaiah 58:8 | ✅ verified | Then shall thy light break forth as the morning, and thine health shall spring forth speedily: and thy righteousness shall go before thee; the glory of the LORD shall be thy rereward. |
| Jeremiah 29:12-13 | ✅ verified | Then shall ye call upon me, and ye shall go and pray unto me, and I will hearken unto you. And ye shall seek me, and find me, when ye shall search for me with all your heart. |
| Jeremiah 33:3 | ✅ verified | Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not. |
| Lamentations 3:22-23 | ✅ verified | It is of the LORD’s mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness. |
| Daniel 1:8 | ✅ verified | But Daniel purposed in his heart that he would not defile himself with the portion of the king’s meat, nor with the wine which he drank: therefore he requested of the prince of the eunuchs that he might not defile himself. |
| Daniel 1:12 | ✅ verified | Prove thy servants, I beseech thee, ten days; and let them give us pulse to eat, and water to drink. |
| Daniel 1:15 | ✅ verified | And at the end of ten days their countenances appeared fairer and fatter in flesh than all the children which did eat the portion of the king’s meat. |
| Daniel 10:2-3 | ✅ verified | In those days I Daniel was mourning three full weeks. I ate no pleasant bread, neither came flesh nor wine in my mouth, neither did I anoint myself at all, till three whole weeks were fulfilled. |
| Daniel 10:3 | ✅ verified | I ate no pleasant bread, neither came flesh nor wine in my mouth, neither did I anoint myself at all, till three whole weeks were fulfilled. |
| Daniel 10:12 | ✅ verified | Then said he unto me, Fear not, Daniel: for from the first day that thou didst set thine heart to understand, and to chasten thyself before thy God, thy words were heard, and I am come for thy words. |
| Joel 2:12 | ✅ verified | Therefore also now, saith the LORD, turn ye even to me with all your heart, and with fasting, and with weeping, and with mourning: |
| Jonah 1:17 | ✅ verified | Now the LORD had prepared a great fish to swallow up Jonah. And Jonah was in the belly of the fish three days and three nights. |
| Micah 7:8 | ✅ verified | Rejoice not against me, O mine enemy: when I fall, I shall arise; when I sit in darkness, the LORD shall be a light unto me. |
| Matthew 4:1-4 | ✅ verified | Then was Jesus led up of the Spirit into the wilderness to be tempted of the devil. And when he had fasted forty days and forty nights, he was afterward an hungred. And when the tempter came to him, he said, If thou be the Son of God, command that these stones be made bread. But he answered and said, It is written, Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God. |
| Matthew 4:1-2 | ✅ verified | Then was Jesus led up of the Spirit into the wilderness to be tempted of the devil. And when he had fasted forty days and forty nights, he was afterward an hungred. |
| Matthew 4:2 | ✅ verified | And when he had fasted forty days and forty nights, he was afterward an hungred. |
| Matthew 4:4 | ✅ verified | But he answered and said, It is written, Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God. |
| Matthew 4:11 | ✅ verified | Then the devil leaveth him, and, behold, angels came and ministered unto him. |
| Matthew 5:6 | ✅ verified | Blessed are they which do hunger and thirst after righteousness: for they shall be filled. |
| Matthew 6:11 | ✅ verified | Give us this day our daily bread. |
| Matthew 6:16 | ✅ verified | Moreover when ye fast, be not, as the hypocrites, of a sad countenance: for they disfigure their faces, that they may appear unto men to fast. Verily I say unto you, They have their reward. |
| Matthew 6:16-18 | ✅ verified | Moreover when ye fast, be not, as the hypocrites, of a sad countenance: for they disfigure their faces, that they may appear unto men to fast. Verily I say unto you, They have their reward. But thou, when thou fastest, anoint thine head, and wash thy face; That thou appear not unto men to fast, but unto thy Father which is in secret: and thy Father, which seeth in secret, shall reward thee openly. |
| Matthew 6:17-18 | ✅ verified | But thou, when thou fastest, anoint thine head, and wash thy face; That thou appear not unto men to fast, but unto thy Father which is in secret: and thy Father, which seeth in secret, shall reward thee openly. |
| Matthew 7:7 | ✅ verified | Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you: |
| Matthew 11:28 | ✅ verified | Come unto me, all ye that labour and are heavy laden, and I will give you rest. |
| Matthew 12:40 | ✅ verified | For as Jonas was three days and three nights in the whale’s belly; so shall the Son of man be three days and three nights in the heart of the earth. |
| Matthew 26:41 | ✅ verified | Watch and pray, that ye enter not into temptation: the spirit indeed is willing, but the flesh is weak. |
| John 3:3 | ✅ verified | Jesus answered and said unto him, Verily, verily, I say unto thee, Except a man be born again, he cannot see the kingdom of God. |
| John 3:16 | ✅ verified | For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life. |
| John 4:14 | ✅ verified | But whosoever drinketh of the water that I shall give him shall never thirst; but the water that I shall give him shall be in him a well of water springing up into everlasting life. |
| John 4:34 | ✅ verified | Jesus saith unto them, My meat is to do the will of him that sent me, and to finish his work. |
| John 6:35 | ✅ verified | And Jesus said unto them, I am the bread of life: he that cometh to me shall never hunger; and he that believeth on me shall never thirst. |
| John 7:37-38 | ✅ verified | In the last day, that great day of the feast, Jesus stood and cried, saying, If any man thirst, let him come unto me, and drink. He that believeth on me, as the scripture hath said, out of his belly shall flow rivers of living water. |
| John 14:27 | ✅ verified | Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid. |
| John 15:5 | ✅ verified | I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing. |
| John 21:12 | ✅ verified | Jesus saith unto them, Come and dine. And none of the disciples durst ask him, Who art thou? knowing that it was the Lord. |
| Acts 13:2 | ✅ verified | As they ministered to the Lord, and fasted, the Holy Ghost said, Separate me Barnabas and Saul for the work whereunto I have called them. |
| Acts 13:2-3 | ✅ verified | As they ministered to the Lord, and fasted, the Holy Ghost said, Separate me Barnabas and Saul for the work whereunto I have called them. And when they had fasted and prayed, and laid their hands on them, they sent them away. |
| Acts 27:33 | ✅ verified | And while the day was coming on, Paul besought them all to take meat, saying, This day is the fourteenth day that ye have tarried and continued fasting, having taken nothing. |
| Acts 27:34 | ✅ verified | Wherefore I pray you to take some meat: for this is for your health: for there shall not an hair fall from the head of any of you. |
| Romans 8:26 | ✅ verified | Likewise the Spirit also helpeth our infirmities: for we know not what we should pray for as we ought: but the Spirit itself maketh intercession for us with groanings which cannot be uttered. |
| Romans 12:1 | ✅ verified | I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service. |
| Romans 12:2 | ✅ verified | And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God. |
| Romans 15:13 | ✅ verified | Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost. |
| 1 Corinthians 6:19-20 | ✅ verified | What? know ye not that your body is the temple of the Holy Ghost which is in you, which ye have of God, and ye are not your own? For ye are bought with a price: therefore glorify God in your body, and in your spirit, which are God’s. |
| 1 Corinthians 6:19 | ✅ verified | What? know ye not that your body is the temple of the Holy Ghost which is in you, which ye have of God, and ye are not your own? |
| 1 Corinthians 9:24 | ✅ verified | Know ye not that they which run in a race run all, but one receiveth the prize? So run, that ye may obtain. |
| 1 Corinthians 9:25 | ✅ verified | And every man that striveth for the mastery is temperate in all things. Now they do it to obtain a corruptible crown; but we an incorruptible. |
| 1 Corinthians 9:26 | ✅ verified | I therefore so run, not as uncertainly; so fight I, not as one that beateth the air: |
| 1 Corinthians 9:27 | ✅ verified | But I keep under my body, and bring it into subjection: lest that by any means, when I have preached to others, I myself should be a castaway. |
| 1 Corinthians 10:31 | ✅ verified | Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God. |
| 2 Corinthians 4:16 | ✅ verified | For which cause we faint not; but though our outward man perish, yet the inward man is renewed day by day. |
| 2 Corinthians 5:17 | ✅ verified | Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new. |
| 2 Corinthians 12:9 | ✅ verified | And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness. Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me. |
| Galatians 5:22-23 | ✅ verified | But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, Meekness, temperance: against such there is no law. |
| Galatians 6:9 | ✅ verified | And let us not be weary in well doing: for in due season we shall reap, if we faint not. |
| Philippians 3:13-14 | ✅ verified | Brethren, I count not myself to have apprehended: but this one thing I do, forgetting those things which are behind, and reaching forth unto those things which are before, I press toward the mark for the prize of the high calling of God in Christ Jesus. |
| Philippians 4:6 | ✅ verified | Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. |
| Philippians 4:13 | ✅ verified | I can do all things through Christ which strengtheneth me. |
| 1 Thessalonians 5:16-18 | ✅ verified | Rejoice evermore. Pray without ceasing. In every thing give thanks: for this is the will of God in Christ Jesus concerning you. |
| 1 Thessalonians 5:16 | ✅ verified | Rejoice evermore. |
| 1 Thessalonians 5:18 | ✅ verified | In every thing give thanks: for this is the will of God in Christ Jesus concerning you. |
| 1 Timothy 4:4 | ✅ verified | For every creature of God is good, and nothing to be refused, if it be received with thanksgiving: |
| 1 Timothy 4:8 | ✅ verified | For bodily exercise profiteth little: but godliness is profitable unto all things, having promise of the life that now is, and of that which is to come. |
| Titus 2:12 | ✅ verified | Teaching us that, denying ungodliness and worldly lusts, we should live soberly, righteously, and godly, in this present world; |
| Hebrews 4:16 | ✅ verified | Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need. |
| Hebrews 12:1 | ✅ verified | Wherefore seeing we also are compassed about with so great a cloud of witnesses, let us lay aside every weight, and the sin which doth so easily beset us, and let us run with patience the race that is set before us, |
| Hebrews 12:11 | ✅ verified | Now no chastening for the present seemeth to be joyous, but grievous: nevertheless afterward it yieldeth the peaceable fruit of righteousness unto them which are exercised thereby. |
| James 4:8 | ✅ verified | Draw nigh to God, and he will draw nigh to you. Cleanse your hands, ye sinners; and purify your hearts, ye double minded. |
| 1 Peter 5:7 | ✅ verified | Casting all your care upon him; for he careth for you. |
| 3 John 1:2 | ✅ verified | Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth. |
