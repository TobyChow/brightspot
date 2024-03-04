import { render, screen } from '@testing-library/react';
import { profile } from '../../dashboard';
import Profile from '../Profile';

test('Profile displays the correct information', () => {
    render(<Profile {...profile}/>);
    const userName = screen.getByText(profile.username);
    const email = screen.getByText(profile.email);
    const picture = screen.getByAltText(/Avatar/i);
    expect(userName).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(picture).toHaveAttribute('src', profile.picture);
});