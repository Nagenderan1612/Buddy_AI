import { useNavigate } from 'react-router-dom';
import './dashboardPage.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';


const DashboardPage = () => {

    const queryClient = useQueryClient();

    const navigate = useNavigate()

    const mutation = useMutation({
        mutationFn: (text) => {
            return fetch(`${import.meta.env.VITE_API_URL}/api/chats`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({ text }),
            }).then((res) => res.json());
        },
        onSuccess: (id) => {
          // Invalidate and refetch
          queryClient.invalidateQueries({ queryKey: ['userChats'] });
          navigate(`/dashboard/chats/${id}`);
        },
      });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const text = e.target.text.value;
        if (!text) return;

        mutation.mutate(text);

    };

    return (
        <div className='dashboardPage'>
            <div className="texts">
                <div className="logo">
                    <img src="/buddylogo.png" alt="" />
                    <h1>BUDDY AI</h1>
                </div>
                <div className="options">
                    <div className="option">
                        <img src="/chat.png" alt="" />
                        <span>Create_a_new_chat</span>
                    </div>

                    <div className="option">
                        <img src="/image.png" alt="" />
                        <span>Analyze_Image</span>
                    </div>

                    <div className="option">
                        <img src="/code.png" alt="" />
                        <span>Help_me_fix_this_code!</span>
                    </div>
                </div>
            </div>
            <div className="formContainer">
                <form onSubmit = {handleSubmit}>
                    <input type="text" name="text" placeholder='Ask Me Anything...' />
                    <button>
                        <img src="/arrow.png" alt="" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DashboardPage;