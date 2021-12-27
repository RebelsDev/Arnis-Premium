import { ActiveCampaignInputs, handleActiveCampaignSubmit } from 'active-campaign-react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'


const ModalLead = (props) => {
    if (!props.show) {
        return (null)
    }
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 id='lead'>{props.title}</h2>
                </div>
                <div className="modal-body">
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default ModalLead

