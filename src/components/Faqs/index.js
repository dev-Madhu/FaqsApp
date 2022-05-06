// Write your code here.

import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="faq-container">
      <h1 className="faq-heading">FAQs</h1>
      <ul className="faqItems-list">
        {faqsList.map(eachFaq => (
          <FaqItem faqDetails={eachFaq} key={eachFaq.id} />
        ))}
      </ul>
    </div>
  )
}

export default Faqs
