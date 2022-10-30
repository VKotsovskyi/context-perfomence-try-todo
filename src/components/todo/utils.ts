const quoteList = [
  'Action is the foundational key to all success.',
  'Vision without action is merely a dream. Action without vision just passes the time. Vision with action can change the world.',
  'There are risks and costs to action. But they are far less than the long range risks of comfortable inaction.',
  'Discipline and united action are the real source of strength for the nation.',
  'Your positive action combined with positive thinking results in success.',
  'I never worry about action, but only inaction.',
  'Take time to deliberate, but when the time for action has arrived, stop thinking and go in.',
  'An ounce of action is worth a ton of theory.',
  'Never do today what you can do tomorrow. Something may occur to make you regret your premature action.',
  'An idea not coupled with action will never get any bigger than the brain cell it occupied.',
  'Think like a man of action, act like a man of thought.',
  'Never mistake motion for action.',
  'Thinking will not overcome fear but action will.',
  'Action may not always bring happiness; but there is no happiness without action.',
  'When it is obvious that the goals cannot be reached, don\'t adjust the goals, adjust the action steps.',
  'Inaction breeds doubt and fear. Action breeds confidence and courage. If you want to conquer fear, do not sit home and think about it. Go out and get busy.',
  'Thinking is easy, acting is difficult, and to put one\'s thoughts into action is the most difficult thing in the world.',
  'The time for action is now. It\'s never too late to do something.',
  'Action speaks louder than words but not nearly as often.',
]

export const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * (quoteList.length - 1))
  return quoteList[randomIndex]
}