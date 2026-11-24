import { Stage, Phone, Expand, Bar, Avatar, Icon, States, Spinner, Connector, type Act } from '../../kit'
import './mm.css'

// Dr. Gaurav Jain's framework, shown as one decision in a savings app.
// Beat 1, the market: competing offers side by side; a note names it.
// Beat 2, the product: a tap opens High-Yield Savings into its detail, and the
// note moves to what the product offers. Beat 3, the customer: Open account,
// a short wait, Account opened; the note lands on the decision. The loop folds
// the card back into the list (the close tap is the visible cause) and the
// notes clear with it.
//
// Real strings: Savings, Everyday Savings, High-Yield Savings, Money Market,
// 4.10% APY, the three features, the button's three states, the three notes.

type Buy = 'idle' | 'busy' | 'done'
type S = { open: boolean; buy: Buy; beat: 0 | 1 | 2 | 3 }
const START: S = { open: false, buy: 'idle', beat: 0 }

const CARD = { x: 16, h: 132 }
const TOPS = [150, 296, 442, 588]
const PICK = 1
const HEADER = 236
const REST = { wide: { x: 500, y: 530 }, compact: { x: 300, y: 540 } }
const SIDE = ['l', 'r', 'l'] as const
const TOP = [289, 232, 412]
// Notes sit at fixed boxes (mm.css); leaders start from these, not from the notes' moving rects
const NOTE_L = 26, NOTE_R = 560, NOTE_W = 172
// Where each leader stops: 6px short of the card and button edges, just past the rate.
// Fixed, because a reduced-motion poster never fires the transition that refreshes rect().
const END_X = [251, 357, 251]

const ART = ['mm-art--rust', 'mm-art--navy', 'mm-art--gold', 'mm-art--sand']
const NAMES: Record<number, string> = { 0: 'Everyday Savings', 2: 'Money Market' }
const LIST_TEXT = [{ eyebrow: 38, sub: 44 }, null, { eyebrow: 46, sub: 52 }, { eyebrow: 34, sub: 40 }]

const NOTES = [
  { key: 'market', title: 'The market', body: 'Competing offers, side by side' },
  { key: 'product', title: 'The product', body: 'What it solves, and why it’s different' },
  { key: 'customer', title: 'The customer', body: 'Value, risk and trust become a decision' },
] as const

const script = async (a: Act<S>) => {
  await a.wait(700)
  a.mark('market')
  a.put({ beat: 1 })
  await a.wait(2200)
  a.mark('tap')
  await a.click('card')
  a.put({ open: true })
  await a.wait(900)
  a.mark('product')
  a.put({ beat: 2 })
  await a.wait(2400)
  a.mark('buy')
  await a.click('buy')
  a.put({ buy: 'busy' })
  await a.wait(1100)
  a.mark('done')
  a.put({ buy: 'done', beat: 3 })
  await a.wait(3000)
  a.mark('close')
  await a.click('close')
  // The notes clear first, so no leader is still drawn while its target moves
  a.put({ beat: 0 })
  await a.wait(300)
  a.put({ open: false })
  await a.wait(900)
  // Under the card's clip now: reset the button unseen
  await a.snap({ buy: 'idle' })
  await a.move(REST)
  await a.wait(300)
}

export default function MoneyMarketed() {
  return (
    <Stage<S>
      width={760}
      height={560}
      compact={{ below: 560, width: 358, height: 560 }}
      initial={START}
      poster={{ open: true, buy: 'done', beat: 3 }}
      script={script}
      cursor={{ at: REST, style: 'touch' }}
      className="mm"
    >
      {(s, rect, layout) => {
        const compact = layout === 'compact'
        const top = TOPS[PICK]
        return (
          <>
            <Phone width={compact ? 310 : 300} className="mm-phone" data-open={s.open || undefined}>
              <div className="mm-list" data-back={s.open || undefined}>
                <header className="mm-head">
                  <div className="mm-head__row">
                    <span className="mm-title">Savings</span>
                    <Avatar name="Priya" size={36} />
                  </div>
                  <span className="mm-head__sub">Compare accounts</span>
                </header>
                {TOPS.map((y, i) =>
                  i === PICK ? (
                    <span key={i} className="mm-slot" data-target="card" style={{ top: y }} />
                  ) : (
                    <div key={i} className={`mm-card ${ART[i]}`} style={{ top: y }}>
                      <span className="mm-card__text">
                        <span className="mm-line" style={{ width: LIST_TEXT[i]!.eyebrow, height: 7, opacity: 0.55 }} />
                        {NAMES[i] ? <span className="mm-card__title">{NAMES[i]}</span> : <span className="mm-line" style={{ width: 120, height: 13 }} />}
                        <span className="mm-line" style={{ width: LIST_TEXT[i]!.sub, height: 7, opacity: 0.55 }} />
                      </span>
                    </div>
                  ),
                )}
              </div>

              <div className="mm-press" style={{ transformOrigin: `50% ${top + CARD.h / 2}px` }}>
                <Expand className="mm-detail" open={s.open} from={rect('card')} radius={22} duration={620}>
                  <div className="mm-detail__inner" style={{ transform: `translateY(${s.open ? 0 : CARD.h - HEADER}px)` }}>
                    <div className={`mm-hero ${ART[PICK]}`} style={{ clipPath: s.open ? 'inset(0px 0px 0px 0px round 0px 0px 0px 0px)' : `inset(0px ${CARD.x}px 0px ${CARD.x}px round 0px 0px 22px 22px)` }}>
                      <span className="mm-close" data-target="close">
                        <Icon name="close" size={14} stroke={2} />
                      </span>
                      <span className="mm-hero__text" style={{ transform: `translateX(${s.open ? 0 : CARD.x}px)` }}>
                        <span className="mm-hero__eyebrow" />
                        <span className="mm-hero__title">High-Yield Savings</span>
                        <span className="mm-hero__sub">4.10% APY</span>
                      </span>
                    </div>
                    <div className="mm-body">
                      <div className="mm-rate">
                        <span className="mm-rate__big" data-target="rate">4.10<small>%</small></span>
                        <span className="mm-rate__label">Annual percentage yield</span>
                      </div>
                      <ul className="mm-feats">
                        <li><span className="mm-feat__ico"><Icon name="lock" size={14} filled /></span>FDIC insured</li>
                        <li><span className="mm-feat__ico"><Icon name="check" size={14} filled /></span>No monthly fees</li>
                        <li><span className="mm-feat__ico"><Icon name="clock" size={14} filled /></span>Withdraw anytime</li>
                      </ul>
                      <span className="mm-buy" data-target="buy" data-state={s.buy}>
                        <States
                          align="center"
                          value={s.buy}
                          states={{
                            idle: <>Open account</>,
                            busy: <><Spinner size={16} /> Opening</>,
                            done: <><Icon name="check" size={16} stroke={2.2} /> Account opened</>,
                          }}
                        />
                      </span>
                      <div className="mm-fine">
                        <Bar w="88%" h={6} r={3} tone={2} />
                        <Bar w="64%" h={6} r={3} tone={2} />
                      </div>
                    </div>
                  </div>
                </Expand>
              </div>
            </Phone>

            {compact ? null : (
              <>
                {NOTES.map((n, i) => (
                  <div
                    key={n.key}
                    className="mm-note"
                    data-target={`note-${i}`}
                    data-state={s.beat === i + 1 ? 'on' : s.beat > i + 1 ? 'past' : 'off'}
                    data-side={SIDE[i]}
                    style={{ top: TOP[i] }}
                  >
                    <span className="mm-note__title">{n.title}</span>
                    <span className="mm-note__body">{n.body}</span>
                  </div>
                ))}
                {NOTES.map((_, i) => {
                  const ready = true
                  return (
                    <Connector
                      key={i}
                      className="mm-leader"
                      from={SIDE[i] === 'l' ? { x: NOTE_L + NOTE_W + 10, y: TOP[i] + 11 } : { x: NOTE_R - 10, y: TOP[i] + 11 }}
                      to={{ x: END_X[i], y: TOP[i] + 11 }}
                      route="straight"
                      radius={8}
                      dots="end"
                      show={ready && s.beat === i + 1}
                    />
                  )
                })}
              </>
            )}
          </>
        )
      }}
    </Stage>
  )
}
